import {
  TokenExpiredError,
  JsonWebTokenError,
  NotBeforeError,
} from 'jsonwebtoken';
import { createHttpResponseBody } from '../http-res-body';

export class NotFoundTokenError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}

export class ForbiddenError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 403;
  }
}

type TokenError =
  | NotFoundTokenError
  | TokenExpiredError
  | JsonWebTokenError
  | NotBeforeError;

export function isTokenError(error: unknown): error is TokenError {
  return (
    error instanceof NotFoundTokenError ||
    error instanceof TokenExpiredError ||
    error instanceof JsonWebTokenError ||
    error instanceof NotBeforeError
  );
}

export function createTokenErrorResponse(error: TokenError) {
  return createHttpResponseBody(401, {
    message: error.message,
  });
}

export function isForbiddenError(error: unknown): error is ForbiddenError {
  return error instanceof ForbiddenError;
}

export function createForbiddenErrorResponse(error: ForbiddenError) {
  return createHttpResponseBody(error.status, {
    message: error.message,
  });
}
