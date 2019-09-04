import ErrorHandling from '../../libs/error';

const user = {
  me: async (parent, args, { dataSources }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await dataSources.userApi.getMe();
      if (result.error) {
        throw new ErrorHandling(result);
      }
      return result;
    } catch (error) {
      throw error;
    }
  },
};
export default user;
