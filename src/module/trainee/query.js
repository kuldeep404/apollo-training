import ErrorHandling from '../../libs/error';

const Trainee = {
  trainee: async (parent, args, { dataSources }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await dataSources.traineeApi.getTrainee();
      if (result.error) {
        throw new ErrorHandling(result);
      }
      return result;
    } catch (error) {
      throw error;
    }
  },
};
export default Trainee;
