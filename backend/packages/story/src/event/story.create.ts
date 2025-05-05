import { Channel } from 'amqplib';
import { story } from '../prisma/prismaClient';

const STORY_CREATE_QUEUE = 'story:create';

export async function sendCreateStoryEvent(channel: Channel, data: story) {
  await channel.assertQueue(STORY_CREATE_QUEUE);

  console.log('data ', data);

  const isSent = channel.sendToQueue(
    STORY_CREATE_QUEUE,
    Buffer.from(JSON.stringify(data)),
  );

  console.log('isSent', isSent);

  //   await connection.close();
}
