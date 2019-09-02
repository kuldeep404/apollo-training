import { user as me, userMutation, userSubscription } from './user';
import { Trainee as trainee, traineeMutation, traineeSubscription } from './trainee';

const resolvers = {
  Query: {
    ...trainee,
    ...me,
  },
  Mutation: {
    ...userMutation,
    ...traineeMutation,
  },
  Subscription: {
    ...userSubscription,
    ...traineeSubscription,
  },
};
export default resolvers;
