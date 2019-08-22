import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { configuration } from './config';
import resolvers from './module';
import typeDefs from './index';
const app = express();
const server = new ApolloServer({ typeDefs, resolvers, });
server.applyMiddleware({ app });
app.listen({ port: configuration.port }, () => {
  console.log('server is ready');
});
