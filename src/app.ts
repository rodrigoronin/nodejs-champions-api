import express, { Request, Response, json } from 'express';
import routes from './routes';

function createApp() {
  const app = express();

  // middlewares
  app.use(json()); // accepts only JSON, no body parsers needed
  app.use('/api', routes);


  return app;
}

export default createApp;
