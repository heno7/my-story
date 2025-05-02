import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';
import { StoryCreateRequestDto } from '../dto/story.createRequestDto';
import { createHttpResponseBody } from '@heno7/common';
export async function createStory(req: Request, res: Response): Promise<void> {
  const story: StoryCreateRequestDto = StoryCreateRequestDto.parse(req.body);

  const createdStory = await prisma.story.create({ data: story });
  const storyResponse = createHttpResponseBody(201, {
    id: createdStory.id,
  });

  res.status(201).json(storyResponse);
}
