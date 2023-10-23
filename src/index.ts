import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './router/routes';
import mongoose from 'mongoose';
import ConnectionDB from './config/dbconnection'

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.get("/",(req,res)=>{
  res.send("helldodd")
})

app.use('/doc', router);
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
  ConnectionDB();
});

/* const MONGO_URL = 'mongodb://127.0.0.1:27017/doc'; // DB URI

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error)); */
