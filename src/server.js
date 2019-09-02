/* eslint-disable arrow-body-style */
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';
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
  // context: ({ req }) => {
  //   return { token: req.headers.authorization };
  // },
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    }
    // check from req
    const token = req.headers.authorization || '';
    return { token };
  },
});
// server.applyMiddleware({ app });
// app.listen({ port: configuration.port }, () => {
//   // eslint-disable-next-line no-console
//   console.log('server is ready');
// });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
server.applyMiddleware({ app });
httpServer.listen({ port: configuration.port }, () => {
  // console.log('server is ready');
});
