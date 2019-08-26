/* eslint-disable arrow-body-style */
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import schema from '.';
import { configuration } from './config';
import { UserApi, TraineeApi } from './services';
// console.log('schema is ', schema)
const app = express();
const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => {
    return {
      traineeApi: new TraineeApi(),
      userApi: new UserApi(),
    };
  },
  context: ({ req }) => {
    return { token: req.headers.authorization };
  },
});
server.applyMiddleware({ app });
app.listen({ port: configuration.port }, () => {
  // eslint-disable-next-line no-console
  console.log('server is ready');
});
