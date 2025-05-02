import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';
import { GetStoriesRequestDto } from '../dto/story.getRequestDto';
import { createHttpResponseBody } from '@heno7/common';

export async function getStories(req: Request, res: Response): Promise<void> {
  const requestQuery: GetStoriesRequestDto = GetStoriesRequestDto.parse(
    req.query,
  );

  const whereClause: {
    [key: string]: string;
  } = {
    status: requestQuery.status,
  };

  if (requestQuery.author !== 'all') {
    whereClause.author = requestQuery.author;
  }

  const stories = await prisma.story.findMany({
    where: whereClause,
  });
  const storiesResponse = createHttpResponseBody(200, stories);

  res.status(200).json(storiesResponse);
}

export async function getStory(req: Request, res: Response): Promise<void> {
  const user = await prisma.story.findFirst({
    where: {
      id: Number(req.params.storyId),
    },
  });
  const userResponse = createHttpResponseBody(200, user);

  res.status(200).json(userResponse);
}
