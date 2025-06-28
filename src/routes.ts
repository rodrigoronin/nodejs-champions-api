import { Router } from 'express';
import { getPlayer } from './controllers/players-controller';

const routes = Router();

routes.get('/', getPlayer);

export default routes;
