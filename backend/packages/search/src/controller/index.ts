import { Router } from 'express';
import { getStories } from './story.get';
// import { checkAtLeastRole, checkCurrentUser } from '@heno7/common';

export const router: Router = Router();

router.get('/search/stories', getStories);

export default router;
