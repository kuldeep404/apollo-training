<<<<<<< HEAD
import { user as me } from './user';
import { Trainee as trainee } from './trainee';
// console.log(trainee);
const resolvers = {
  Query: {
    ...trainee,
    ...me,
  },
};
=======
import  {user as me}  from './user';
import {Trainee as trainee} from './trainee';
// console.log(trainee);
const resolvers = {
    Query:{
        trainee,
        me
    }
}
>>>>>>> 99827ee9c2c53e15120c82262a420cb320df2bdc
export default resolvers;
