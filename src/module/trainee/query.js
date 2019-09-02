import ErrorHandling from '../../libs/error';

const Trainee = {
  trainee: async (parent, args, { dataSources }) => {
    const result = await dataSources.traineeApi.getTrainee();
    if (result.error) {
      throw new ErrorHandling(result);
    }
    return result;
  },
};
export default Trainee;
