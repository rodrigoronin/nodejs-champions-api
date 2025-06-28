import { Request, Response } from 'express';

export const getPlayer = (req:Request, res:Response) => {
  const data = {
    name: 'Bruxo',
  }

  res.status(200).json(data);
};
