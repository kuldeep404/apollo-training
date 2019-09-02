// eslint-disable-next-line object-curly-newline
import { TRAINEE_CREATE, TRAINEE_DELETE, TRAINEE_UPDATE, pubsub } from '../../subscription';

const Subscription = {
  traineeCreate: {
    subscribe: () => pubsub.asyncIterator([TRAINEE_CREATE]),
  },
  traineeUpdate: {
    subscribe: () => pubsub.asyncIterator([TRAINEE_UPDATE]),
  },
  traineeDelete: {
    subscribe: () => pubsub.asyncIterator([TRAINEE_DELETE]),
  },
};
export default Subscription;
