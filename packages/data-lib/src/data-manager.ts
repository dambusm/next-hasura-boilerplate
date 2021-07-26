import { AuthManager } from './auth-manager';
import { getHasuraSDK, HasuraSDK } from './data-sources/hasura/hasura-sdk';
import { PostsManager } from './posts-manager';

export class DataManager {
  hasuraSDK: HasuraSDK;
  authManager: AuthManager;
  postsManager: PostsManager;
  constructor(options?: { adminSecret?: string; jwt?: any }) {
    this.hasuraSDK = getHasuraSDK(options);
    this.authManager = new AuthManager(this.hasuraSDK);
    this.postsManager = new PostsManager(this.hasuraSDK);
  }
}
