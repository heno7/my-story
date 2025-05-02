import { Router } from 'express';
import { createStory } from './story.create';
import { checkAtLeastRole, checkCurrentUser } from '@heno7/common';

export const router: Router = Router();

// router.get('/stories', getStories);

// router.get('/stories/:sttoryId', getStory);

router.post(
  '/stories',
  checkCurrentUser,
  checkAtLeastRole('writer', ['reader', 'writer', 'admin']),
  createStory,
);

export default router;
