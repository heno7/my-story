import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';
import { createHttpResponseBody } from '@heno7/common';

export async function getUsers(req: Request, res: Response): Promise<void> {
  const users = await prisma.auth_user.findMany({
    omit: {
      password: true,
    },
  });
  const usersResponse = createHttpResponseBody(200, users);

  res.status(200).json(usersResponse);
}

export async function getUser(req: Request, res: Response): Promise<void> {
  const user = await prisma.auth_user.findFirst({
    where: {
      id: Number(req.params.userId),
    },
    omit: {
      password: true,
    },
  });
  const userResponse = createHttpResponseBody(200, user);

  res.status(200).json(userResponse);
}
