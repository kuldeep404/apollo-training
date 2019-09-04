import { USER_LOGIN, pubsub } from '../../subscription';

const Subscription = {
  login: {
    subscribe: () => pubsub.asyncIterator([USER_LOGIN]),
  },
};
export default Subscription;
