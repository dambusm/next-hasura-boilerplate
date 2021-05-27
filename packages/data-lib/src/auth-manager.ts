import {DataLibError} from './data-lib-error';
import {hasuraSDK} from './data-sources/hasura/hasura-sdk';
import {isUniquenessConstraintError} from './data-sources/hasura/types';

export enum AuthError {
  UserAlreadyExists = 'UserAlreadyExists',
}

export class AuthManager {
  static async getUserByEmail(email: string) {
    return (await hasuraSDK.getUserByEmail({ email })).users[0];
  }

  static async createUser(email: string) {
    try {
      return (await hasuraSDK.createUser({ email })).insert_users_one?.id;
    } catch (error) {
      if (isUniquenessConstraintError(error)) {
        throw new DataLibError(error, AuthError.UserAlreadyExists);
      }
      throw new DataLibError(error);
    }
  }
}
