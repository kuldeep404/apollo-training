import { PubSub } from 'apollo-server-express';

const pubsub = new PubSub();

const TRAINEE_CREATE = 'TRAINEE_CREATE';
const TRAINEE_UPDATE = 'TRAINEE_UPDATE';
const TRAINEE_DELETE = 'TRAINEE_DELETE';
const USER_LOGIN = 'USER_LOGIN';
export {
  pubsub,
  TRAINEE_CREATE,
  TRAINEE_UPDATE,
  TRAINEE_DELETE,
  USER_LOGIN,
};
