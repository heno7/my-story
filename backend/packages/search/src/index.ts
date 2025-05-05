import express, { Express } from 'express';
import { errorHandler } from '@heno7/common';
import searchRoutes from './controller';
import { listenEvents } from './event';
// import amqplib from 'amqplib';

const app: Express = express();
const port = 7777;
app.use(express.json());

app.use(searchRoutes);

app.get('/search', (req, res) => {
  res.send('Hello World From Heno7 With Search!!!!!');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`search service listening on port ${port}`);
});

(async () => await listenEvents())();

// (async () => {
//   const queue = 'tasks';
//   const conn = await amqplib.connect('amqp://queue-service:5672');

//   const ch1 = await conn.createChannel();
//   await ch1.assertQueue(queue);

//   // Listener
//   ch1.consume(queue, (msg) => {
//     if (msg !== null) {
//       console.log('Received:', msg.content.toString());
//       ch1.ack(msg);
//     } else {
//       console.log('Consumer cancelled by server');
//     }
//   });

//   // Sender
//   const ch2 = await conn.createChannel();

//   setInterval(() => {
//     ch2.sendToQueue(queue, Buffer.from('something to do'));
//   }, 1000);
// })();
