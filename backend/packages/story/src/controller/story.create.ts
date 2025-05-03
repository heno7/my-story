import { Request, Response } from 'express';
import prisma, { story } from '../prisma/prismaClient';
import { StoryCreateRequestDto } from '../dto/story.createRequestDto';
import {
  BadRequestError,
  createHttpResponseBody,
  toLowerCaseObj,
} from '@heno7/common';
import { authRpcClient } from '../rpc';
export async function createStory(req: Request, res: Response): Promise<void> {
  const story: StoryCreateRequestDto = StoryCreateRequestDto.parse(req.body);
  console.log('recieved story', story);
  await new Promise((resolve, reject) => {
    authRpcClient.checkUserExist(
      { name: story.author },
      (err: Error, result: { exist: boolean }) => {
        console.log(result);
        if (err) {
          return reject(Error('internal server error'));
        }
        if (result.exist) resolve(result.exist);
        else reject(new BadRequestError('author is not exist'));
      },
    );
  });

  const toLowerCaseStory: story = toLowerCaseObj(story);

  const createdStory = await prisma.story.create({ data: toLowerCaseStory });
  const storyResponse = createHttpResponseBody(201, {
    id: createdStory.id,
  });

  res.status(201).json(storyResponse);
}
