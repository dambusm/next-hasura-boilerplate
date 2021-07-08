import { AuthManager } from './auth-manager';
import { getHasuraSDK, HasuraSDK } from './data-sources/hasura/hasura-sdk';
import { PostsManager } from './posts-manager';

export class DataManager {
  hasuraSDK: HasuraSDK;
  authManager: AuthManager;
  constructor(adminSecret?: string) {
    this.hasuraSDK = getHasuraSDK(adminSecret);
    this.authManager = new AuthManager(this.hasuraSDK);
  }
}
