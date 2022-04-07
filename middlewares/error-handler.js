const {CustomAPIError} = require('../errors');
const {StatusCodes} = require('http-status-codes');


const errorHandlerMiddleware = (err,req, res, next) => {

    if (err instanceof CustomAPIError) {
        const { status, message } = err;
        res.status(status).json({ msg: message });
    } else {
        console.error(err);
        res.status(StatısCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
};

module.exports = errorHandlerMiddleware;