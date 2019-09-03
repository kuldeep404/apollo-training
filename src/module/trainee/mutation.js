import {
  TRAINEE_CREATE, TRAINEE_DELETE, TRAINEE_UPDATE, pubsub,
} from '../../subscription';
import ErrorHandling from '../../libs/error';

const Mutation = {
  addTrainee: async (parent, args, context) => {
    const { dataSources } = context;
    const { input: { email, password, name } } = args;
    const result = await dataSources.traineeApi.createTrainee(email, password, name);
    if (result.error) {
      throw new ErrorHandling(result);
    }
    pubsub.publish(TRAINEE_CREATE, { traineeCreate: result });
    return result;
  },
  updateTrainee: async (parent, args, context) => {
    const { dataSources } = context;
    const { input: { id, dataToUpdate } } = args;
    const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate);
    if (result.error) {
      throw new ErrorHandling(result);
    }
    pubsub.publish(TRAINEE_UPDATE, { traineeUpdate: result });
    return result;
  },
  deleteTrainee: async (parent, args, context) => {
    const { dataSources } = context;
    const { input: { id } } = args;
    const result = await dataSources.traineeApi.deleteTrainee(id);
    if (result.error) {
      throw new ErrorHandling(result);
    }
    pubsub.publish(TRAINEE_DELETE, { traineeDelete: result });
    return result;
  },

};
export default Mutation;
