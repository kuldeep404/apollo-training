import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import resolvers from './module';

// eslint-disable-next-line no-undef
const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });
// console.log( typeDefs);
export default {
  typeDefs,
  resolvers,
};
