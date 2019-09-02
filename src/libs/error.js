/* eslint-disable class-methods-use-this */
import {
  AuthenticationError, ForbiddenError, UserInputError, ApolloError,
} from 'apollo-server-core';

export default class ErrorHandling {
  constructor(error) {
    switch (error.status) {
      case 401: this.AuthenticationError(error);
        break;
      case 403: this.ForbiddenError(error);
        break;
      case 422: this.UserInputError(error);
        break;
      default: this.AppolloError(error);
        break;
    }
  }

  AuthenticationError(error) {
    throw new AuthenticationError(error.message);
  }

  ForbiddenError(error) {
    throw new ForbiddenError(error.message);
  }

  UserInputError(error) {
    throw new UserInputError(error.message);
  }

  AppolloError(error) {
    throw new ApolloError(error.message);
  }
}
