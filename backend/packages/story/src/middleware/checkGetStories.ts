import { Request, Response, NextFunction } from 'express';

export function checkGetStories(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  //   const { status, author } = req.query;

  //   if (status && !['draft', 'published'].includes(status)) {
  //     return res.status(400).json({
  //       error: 'Invalid status. Allowed values are "draft" or "published".',
  //     });
  //   }

  //   if (author && author !== 'all' && typeof author !== 'string') {
  //     return res.status(400).json({
  //       error: 'Invalid author. Allowed value is "all" or a string.',
  //     });
  //   }

  next();
}
