import { sdk } from './db-api';

export const getUserByEmail = async (email: string) =>
  (await sdk.getUserByEmail({ email })).users[0];

export const createUser = async (email: string) =>
  (await sdk.createUser({ email })).insert_users_one?.id;
