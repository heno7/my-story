import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';
import TokenCreateRequestDto from '../dto/token.createRequestDto';
import { createHttpResponseBody } from '@heno7/common';
import { verifyPassword } from '../util/password';
import { generateToken } from '../util/token';
import { BadRequestError } from '@heno7/common';
export default async function createAuthToken(
  req: Request,
  res: Response,
): Promise<void> {
  const creInfo: TokenCreateRequestDto = TokenCreateRequestDto.parse(req.body);

  const user = await prisma.auth_user.findFirst({
    where: {
      email: creInfo.email,
    },
  });

  if (!user) {
    throw new BadRequestError('In valid email or password');
  }

  if (!(await verifyPassword(creInfo.password, user.password))) {
    throw new BadRequestError('In valid email or password');
  }

  const TOKEN_EPXIRATION_TIME = process.env.TOKEN_EXPIRATION_TIME || '1h';

  const token = await generateToken(
    { id: user.id, email: user.email, name: user.name, role: user.role },
    TOKEN_EPXIRATION_TIME,
  );

  const tokenResponse = createHttpResponseBody(201, {
    token,
  });

  res.status(201).json(tokenResponse);
}
