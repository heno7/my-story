import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';
import UserCreateRequestDto from '../dto/user.createRequestDto';
import UserCreateResponseDto from '../dto/user.createResponseDto';
import { createHttpResponseBody } from '@heno7/common';
export default async function createUser(
  req: Request,
  res: Response,
): Promise<void> {
  const user: UserCreateRequestDto = UserCreateRequestDto.parse(req.body);
  if (user.role === 'admin') {
    throw new Error('Admin role is not allowed to be created');
  }
  const createdUser = await prisma.auth_user.create({ data: user });
  const userResponse: UserCreateResponseDto = createHttpResponseBody(201, {
    id: createdUser.id,
  });

  res.status(201).json(userResponse);
}
