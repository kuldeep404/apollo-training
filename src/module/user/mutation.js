import { USER_LOGIN, pubsub } from '../../subscription';
import ErrorHandling from '../../libs/error';

const Mutation = {
  login: async (parent, args, context) => {
    const { dataSources } = context;
    const { input: { email, password } } = args;
    const result = await dataSources.userApi.login(email, password);
    if (result.error) {
      throw new ErrorHandling(result);
    }
    // console.log(result);
    pubsub.publish(USER_LOGIN, { login: result });
    return result;
  },
};
export default Mutation;
