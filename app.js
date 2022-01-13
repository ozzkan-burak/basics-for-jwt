require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//middlewares
app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {

    try {
      console.log(`Server is running on port ${PORT}`);
    } catch (error) {
      console.log(error);
    }
});