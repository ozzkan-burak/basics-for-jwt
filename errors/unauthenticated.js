const CustomAPIError = require('./custom-api-error');

class UnauthhenticatedError extends CustomAPIError {
  constructor( message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthhenticatedError;