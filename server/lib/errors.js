'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getErrorMessage;
class HttpError extends Error {
  constructor() {
    super();
  }
}
exports.HttpError = HttpError;
class BadRequestError extends HttpError {
  constructor(message) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Invalid request';
    this.status = 400;
  }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends HttpError {
  constructor(message) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Unauthorized';
    this.status = 401;
  }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends HttpError {
  constructor(message) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'User is not authorized';
    this.status = 403;
  }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends HttpError {
  constructor(message) {
    super();
    this.name = this.constructor.name;
    this.message = message || 'Not found';
    this.status = 404;
  }
}
exports.NotFoundError = NotFoundError;
class ValidationError extends BadRequestError {
  constructor(paths, message) {
    super(message || 'Validation error');
    this.name = this.constructor.name;
    this.paths = paths;
  }
}
exports.ValidationError = ValidationError;
class SimulatedError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || 'Simulated error';
    this.status = 500;
  }
}
exports.SimulatedError = SimulatedError;
const defaultResponse = {
  message: 'Something went wrong on the server',
  status: 500
};
function getErrorMessage(err) {
  if (err.code && err.code === 11000 || err.code === 11001) {
    return {
      message: 'Unique field already exists',
      status: 400
    };
  }
  if (err instanceof HttpError) {
    return {
      message: err.message,
      status: err.status,
      paths: err.paths
    };
  }
  //This catches when body-parser encounters bad JSON user data in a request
  if (err.stack.match(/^SyntaxError:.+in JSON(.|\n)*node_modules\/body-parser/)) {
    return {
      message: process.env.NODE_ENV === 'production' ? 'The data received by the server is not properly formatted. Try refreshing your browser.' : `Bad JSON in HTTP request. ${err.message}:  ${err.body}`,
      status: 400
    };
  }
  //This catches error from MongoDB
  if (err.name == "MongoError") {
    return {
      message: `MongoError: ${err.message}`,
      status: 500
    };
  }
  return defaultResponse;
}