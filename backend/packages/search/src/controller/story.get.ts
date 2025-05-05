import { Request, Response } from 'express';
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stories = [] as any;
  const storiesResponse = createHttpResponseBody(200, stories);

  res.status(200).json(storiesResponse);
}
