import express, { Request, Response, json } from 'express';
import { getPlayer } from './controllers/players-controller';

function createApp() {
  const app = express();

  // makes the app only accept JSON (no body parsers needed)
  app.use(json());

  app.get('/', getPlayer);

  return app;
}

export default createApp;
