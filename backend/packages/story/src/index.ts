import express, { Express } from 'express';
import { errorHandler } from '@heno7/common';
import storyRoutes from './controller';

const app: Express = express();
const port = 7777;
app.use(express.json());

app.use(storyRoutes);

app.get('/story/test', (req, res) => {
  res.send('Hello World From Heno7 !!!!!');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`story service listening on port ${port}`);
});
