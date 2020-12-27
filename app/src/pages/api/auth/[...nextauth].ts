import { NowRequest, NowResponse } from '@now/node';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { createUser } from '../../../data/auth-manager';
import { isUniquenessConstraintError } from '../../../graphql/hasura-types';

const { GITHUB_ID, GITHUB_SECRET, JWT_SECRET } = process.env;
if (!GITHUB_ID || !GITHUB_SECRET || !JWT_SECRET) {
  throw new Error('Missing env variable in api/auth');
}

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  jwt: {
    secret: JWT_SECRET,
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      try {
        if (!user.email) {
          throw new Error('No email provided by Oauth provider');
        }
        await createUser(user.email);
        return Promise.resolve(true);
      } catch (error) {
        if (isUniquenessConstraintError(error)) {
          console.log('User exists');
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      }
    },
  },
};

export default (req: NowRequest, res: NowResponse) =>
  NextAuth(req, res, options);
