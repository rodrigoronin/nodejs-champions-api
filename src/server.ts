import express, { Request, Response } from "express";
import 'dotenv/config';

const app = express();

app.get('/', (req:Request, res:Response) => {
  const data = {
    name: 'Cristiano Ronaldo',
    club: 'Al Nassr',
    value: '12.00 mi. EUR'
  }

  res.send(JSON.stringify(data));
})

app.listen(process.env.PORT, () => {
  console.log('App is running!');
})