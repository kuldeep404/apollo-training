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
    return result;
  }

  async createTrainee(email, password, name) {
    return this.post('trainee', { email, password, name });
  }

  async updateTrainee(id, dataToUpdate) {
    return this.put('trainee', { id, dataToUpdate });
  }

  async deleteTrainee(id) {
    return this.delete(`trainee/delete/${id}`, { id });
  }
}
export default TraineeApi;
