import  {User as me}  from './user';
import {Trainee as trainee} from './trainee';
// console.log(trainee);
const resolvers = {
    Query:{
        trainee,
        me
    }
}
export default resolvers;