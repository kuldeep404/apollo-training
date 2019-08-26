// import { datasource } from 'apollo-datasource-graphql';
import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class TraineeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.SERVICE_URL;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
  }

  async getTrainee() {
    const result = await this.get('trainee');
    // console.log('-----------',result)
    return result;
  }
}
export default TraineeApi;
