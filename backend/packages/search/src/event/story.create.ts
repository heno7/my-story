import { ChannelModel, Channel } from 'amqplib';

const STORY_CREATE_QUEUE = 'story:create';

export async function recieveCreateStoryEvent(connection: ChannelModel) {
  try {
    console.log('Connected to Queue in Search Service');

    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(STORY_CREATE_QUEUE);

    await channel.consume(
      STORY_CREATE_QUEUE,
      (msg) => {
        if (msg !== null) {
          console.log('Received:', JSON.parse(msg.content.toString()));
          channel.ack(msg);
        } else {
          console.log('Consumer cancelled by server');
        }
      },
      {
        noAck: false,
      },
    );
  } catch (error) {
    // console.log((error as Error).message);
    console.log(error);
  }
}
