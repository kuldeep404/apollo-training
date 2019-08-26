const user = {
  me: (parent, args, { dataSources }) => {
    // eslint-disable-next-line no-console
    // console.log('data source is ', dataSources.userApi.getMe);
    return dataSources.userApi.getMe();
  },
};
export default user;
