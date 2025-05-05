import amqplib, { ChannelModel } from 'amqplib';

import { recieveCreateStoryEvent } from './story.create';

export function listenEvents() {
  setTimeout(async () => {
    const connection: ChannelModel = await amqplib.connect(
      'amqp://queue-service:5672',
    );
    recieveCreateStoryEvent(connection);
  }, 5000);
}
