import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';
import UserCreateRequestDto from '../dto/user.createRequestDto';
import { BadRequestError, createHttpResponseBody } from '@heno7/common';
import { hashPassword } from '../util/password';
export default async function createUser(
  req: Request,
  res: Response,
): Promise<void> {
  const user: UserCreateRequestDto = UserCreateRequestDto.parse(req.body);
  if (user.role === 'admin') {
    throw new BadRequestError('admin role is not allowed to be created');
  }
  const existingUser = await prisma.auth_user.findFirst({
    where: {
      OR: [{ email: user.email }, { name: user.name }],
    },
  });
  if (existingUser) {
    throw new BadRequestError('name or email already exists');
  }

  user.password = await hashPassword(user.password);
  const createdUser = await prisma.auth_user.create({ data: user });
  const userResponse = createHttpResponseBody(201, {
    id: createdUser.id,
  });

  res.status(201).json(userResponse);
}
