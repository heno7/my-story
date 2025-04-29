import { Router, Request, Response } from 'express';
import createUser from './user.create';
export const router: Router = Router();

router.post('/user', createUser);

router.get('/auth/user', (_req: Request, res: Response) => {
  res.send('Hello World From Heno7 user');
});

export default router;
