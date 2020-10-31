import { getSdk } from '../graphql/sdk';
import { GraphQLClient } from 'graphql-request';

const { HASURA_ADMIN_SECRET, HASURA_GRAPHQL_URL } = process.env;

if (!HASURA_ADMIN_SECRET || !HASURA_GRAPHQL_URL) {
  throw new Error('Env variable missing');
}

const client = new GraphQLClient(
  HASURA_GRAPHQL_URL,
  {
    headers: {
      'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
    },
  }
);
export const sdk = getSdk(client);
