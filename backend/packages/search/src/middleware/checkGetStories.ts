import { Request, Response, NextFunction } from 'express';

export function checkGetStories(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next();
}
