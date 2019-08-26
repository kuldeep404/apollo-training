import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class UserApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.SERVICE_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getMe() {
    const result = await this.get('user/me');
    return result;
  }
}
export default UserApi;
