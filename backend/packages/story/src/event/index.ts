import amqplib, { ChannelModel, Channel } from 'amqplib';

import { sendCreateStoryEvent as origin } from './story.create';
import { story } from '../prisma/prismaClient';

let channel: Channel;

setTimeout(async () => {
  const connection: ChannelModel = await amqplib.connect(
    'amqp://queue-service:5672',
  );
  channel = await connection.createChannel();
}, 5000);

export function sendCreateStoryEvent(data: story) {
  return origin(channel, data);
}
