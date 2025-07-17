import { Router } from 'express';
import { getPlayer } from './controllers/players-controller';
import { getTeam } from './controllers/teams-controller';

const routes = Router();

routes.get('/players', getPlayer);

routes.get('/teams', getTeam);

export default routes;
