const CustomAPIError = require('./custom-api-error');

class BadRequest extends CustomAPIError {
  constructor( message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequest;