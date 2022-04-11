const express = require('express');
const cors = require("cors");
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')

connectDB();

//기본 포트 설정 
const PORT = process.env.PORT || 5000;
//Express app선언.
const app = express();

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions));
/*Application Level Middleware 
 app의 요청 */
//express().use() : Mounts the specified middleware function or functions at the specified path
//express.json() : Parse incoming requests with JSON payloads & based on body-parser.
app.use(express.json()); 
//express.urlencoded() : Parse incoming requests with urlencoded payloads & based on body-parser
app.use(express.urlencoded({extended : false}))


// /api request에 대한 Middleware
app.use('/api/goal', require('./routes/goalRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(PORT , ()=> console.log(`Running on PORT : http://localhost:${PORT}`));