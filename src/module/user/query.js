import ErrorHandling from '../../libs/error';

const user = {
  me: async (parent, args, { dataSources }) => {
    const result = await dataSources.userApi.getMe();
    if (result.error) {
      throw new ErrorHandling(result);
    }
    return result;
  },
};
export default user;
