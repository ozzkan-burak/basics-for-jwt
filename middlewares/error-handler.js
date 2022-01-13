const CustomAPIError = require('../errors/custom-api-error');
const errorHandlerMiddleware = (err,req, res, next) => {
    if (err instanceof CustomAPIError) {
        const { status, message } = err;
        res.status(status).json({ msg: message });
    } else {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = errorHandlerMiddleware;