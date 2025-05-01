import { createHttpResponseBody } from '../http-res-body';

export class BadRequestError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}

export function isBadRequestError(error: unknown) {
  return error instanceof BadRequestError;
}

export function createBadRequestErrorResponse(error: BadRequestError) {
  return createHttpResponseBody(error.status, { error: error.message });
}
