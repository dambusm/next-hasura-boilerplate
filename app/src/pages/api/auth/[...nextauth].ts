import { AuthError, DataManager } from '@next-hasura-boilerplate/data-lib';
import { DataLibError } from '@next-hasura-boilerplate/data-lib/src/data-lib-error';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import { GenericObject } from 'next-auth/_utils';
import Providers from 'next-auth/providers';

const {
  GITHUB_ID,
  GITHUB_SECRET,
  JWT_SECRET,
  HASURA_ADMIN_SECRET,
} = process.env;
if (!GITHUB_ID || !GITHUB_SECRET || !JWT_SECRET || !HASURA_ADMIN_SECRET) {
  throw new Error('Missing env variable in api/auth');
}

type UserWithRequiredFields = {
  email: string;
};

function isGenericUser(toCheck: unknown): toCheck is UserWithRequiredFields {
  return typeof (toCheck as UserWithRequiredFields).email === 'string';
}

type Claims = UserWithRequiredFields & {
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': string[];
    'x-hasura-default-role': string;
  };
};

const encodeJWT = (claims: GenericObject) =>
  jwt.sign(claims, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '120 seconds',
  });
const decodeJWT = (encodedToken: string) =>
  jwt.verify(encodedToken, JWT_SECRET, {
    algorithms: ['HS256'],
  }) as string;

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  jwt: {
    secret: JWT_SECRET,
    encode: async ({ secret, token: claims, maxAge }) => {
      if (!claims) {
        throw new Error('No claims provided to encode');
      }
      return encodeJWT(claims);
    },
    decode: async ({ secret, token, maxAge }) => {
      if (!token) {
        throw new Error('No token provided to encode');
      }
      return decodeJWT(token);
    },
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      // Resolve to true if user is allowed to sign in, else false
      try {
        if (!isGenericUser(user)) {
          throw new Error('Unexpected user format');
        }
        const dataManager = new DataManager({
          adminSecret: HASURA_ADMIN_SECRET,
        });
        await dataManager.authManager.createUser(user.email);
        return Promise.resolve(true);
      } catch (error) {
        if (
          error instanceof DataLibError &&
          error.type === AuthError.UserAlreadyExists
        ) {
          console.log('User exists');
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      }
    },
    async jwt(
      token,
      user: UserWithRequiredFields,
      account,
      profile,
      isNewUser
    ): Promise<Claims> {
      if (!isGenericUser(token)) {
        throw new Error('Unexpected token format');
      }
      return {
        email: token.email,
        // Add required hasura claims
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
        },
      };
    },
    // jwt() callback is invoked before the session() callback, so anything you add to the JSON Web Token will be immediately available in the session callback
    async session(session, claims: Claims) {
      // NB: Second parameter is JWT Token (not User as default types suggest) when using JWT
      // If you want to make something available you added to the token through the jwt() callback, you have to explicitly forward it here to make it available to the client.
      // We recreate the signed token here and pass it to the client
      const encodedToken = encodeJWT(claims);
      return { ...session, encodedToken };
    },
  },
};

const nextAuth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
export default nextAuth;
