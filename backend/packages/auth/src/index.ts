import express, { Express } from 'express';
import authRoutes from './controller';
// import amqplib from 'amqplib';

const app: Express = express();
const port = 7777;
app.use(express.json());

app.use(authRoutes);

app.get('/auth/test', (req, res) => {
  res.send('Hello World From Heno7 !!!!!');
});

app.listen(port, () => {
  console.log(`auth service listening on port ${port}`);
});

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
