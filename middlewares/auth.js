const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-api-error');

const authenticationMiddleware = async (req, res, next) => {

  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new CustomAPIError(401, 'No Token provide');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decoded;
    req.user = { id, username };

    next();

  } catch (err) {
    throw new CustomAPIError(400, 'Not authorized to access this route');
  }

};

module.export = authenticationMiddleware;