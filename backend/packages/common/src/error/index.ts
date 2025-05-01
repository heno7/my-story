import { Request, Response, NextFunction } from 'express';

import { isValidationError, createValidationErrorResponse } from './validation';

import { createBadRequestErrorResponse, isBadRequestError } from './badRequest';

import { createHttpResponseBody } from '../http-res-body';
import {
  createForbiddenErrorResponse,
  createTokenErrorResponse,
  isForbiddenError,
  isTokenError,
} from './auth';

export * from './validation';
export * from './badRequest';
export * from './auth';

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void {
  if (isValidationError(error)) {
    const response = createValidationErrorResponse(error);
    res.status(response.status).json(response);
    return;
  }

  if (isBadRequestError(error)) {
    const response = createBadRequestErrorResponse(error);
    res.status(response.status).json(response);
    return;
  }

  if (isTokenError(error)) {
    const response = createTokenErrorResponse();
    res.status(response.status).json(response);
    return;
  }

  if (isForbiddenError(error)) {
    const response = createForbiddenErrorResponse(error);
    res.status(response.status).json(response);
    return;
  }

  // Handle other errors
  console.error(error); // Log the error for debugging
  const serverErrorResponse = createHttpResponseBody(500, {
    message: 'internal server error',
  });
  res.status(500).json(serverErrorResponse);
}
