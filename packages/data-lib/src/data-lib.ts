import { AuthManager } from './auth-manager';

export class DataLib {
  authManger: AuthManager;
  constructor() {
    this.authManger = new AuthManager();
  }
}
