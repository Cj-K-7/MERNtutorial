const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/api', require('./routes/apiRouter'))

app.use(errorHandler);

app.listen(PORT , ()=> console.log(`Running on PORT : http://localhost:${PORT}`));