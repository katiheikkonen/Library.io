import express, { Express, Request, Response } from 'express';
import { ping } from './db';

const app: Express = express();
const port = 1234;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/ping', async (req: Request, res: Response) => {
  // ping().then((r) => {res.send(r)})
  const result = await ping();
  res.send(result);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});