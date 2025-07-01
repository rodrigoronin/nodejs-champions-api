import { Request, Response } from 'express';
import { getTeamService } from '../services/teams-service';

export const getTeam = async (req:Request, res:Response) => {
  const { statusCode, body } = await getTeamService();

  res.status(statusCode).json(body);
};
