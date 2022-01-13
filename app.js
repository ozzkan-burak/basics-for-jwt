require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middlewares/notFound');
const errorHAndlerMiddleware = require('./middlewares/errorHandler');

//middlewares
app.use(express.static('./public'));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});