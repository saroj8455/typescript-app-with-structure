import express, { Express } from 'express';
import helmet from 'helmet';
import routes from './routes';
import Home from './controllers/home.controller';
import CONNECT from './config/connect';
import * as dotenv from 'dotenv';
import laptopRoute from './routes/laptop.route';

// Config ENV
dotenv.config();

const app: Express = express();
// Hide header Information
app.use(helmet());

app.use(express.json());

// DB Config
CONNECT();

// app.get('/', (req, res) => {
//   return res.send('Hello World App');
// });

// By Home class
app.get('/', Home.displayHomePage);

app.post('/api/v1', (req, res) => {
  const data = req.body;
  res.status(200).jsonp({
    message: 'Hi Dev. Hello World App',
    data,
  });
});

// Config Laptop Route
app.use('/api/laptop',laptopRoute);

// Call Route
routes(app);

export default app;
