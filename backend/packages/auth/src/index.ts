import express, { Express, Request, Response } from 'express';
// import amqplib from 'amqplib';
import { PrismaClient } from '../prisma-client';

const app: Express = express();
const port = 7777;
app.use(express.json());
app.post('/auth', (req: Request, res: Response) => {
  res.send('Hello World From Tu Nhien With Love!');
});

const prisma = new PrismaClient();

app.listen(port, async () => {
  console.log(`auth service listening on port ${port}`);
  //   await prisma.user.create({
  //     data: {
  //       id: 123,
  //       email: 'elsa@prisma.io',
  //       name: 'Elsa Prisma',
  //     },
  //   });
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       email: 'elsa@prisma.io',
  //     },
  //   });
  //   console.log(user);
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
