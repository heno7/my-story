import { Router, Request } from 'express';
import createUser from './user.create';
import { getUser, getUsers } from './user.get';
import createAuthToken from './token.create';
import {
  checkCurrentUser,
  checkExactRole,
  addCurrentAccessResourceOwnerInfo,
  checkCurrentOwnerAndAllowRoles,
} from '@heno7/common';

export const router: Router = Router();

router.post(
  '/auth/user',
  checkCurrentUser,
  checkExactRole('admin'),
  createUser,
);

router.get('/auth/users', checkCurrentUser, checkExactRole('admin'), getUsers);

router.get(
  '/auth/user/:userId',
  checkCurrentUser,
  addCurrentAccessResourceOwnerInfo(
    'userId',
    async (req: Request, resourceIdName: string) => req.params[resourceIdName],
  ),
  checkCurrentOwnerAndAllowRoles(['admin']),
  getUser,
);

router.post('/auth/token', createAuthToken);

export default router;
