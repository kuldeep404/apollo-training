const Trainee = {
   trainee : async(parent, args, { dataSources }) => {
    // eslint-disable-next-line no-console
    // console.log('data source is ', dataSources.traineeApi.getTrainee);
    const result = await dataSources.traineeApi.getTrainee();
    // console.log('----------',result[0].status)
    return result
  },
};
export default Trainee;
