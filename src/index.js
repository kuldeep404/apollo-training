import  path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });
// console.log( typeDefs);
export default typeDefs;