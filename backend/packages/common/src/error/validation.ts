import { ZodError } from 'zod';
import { HttpResponseBody } from '../http-res-body';

function checkZodError(error: unknown): error is ZodError {
  return error instanceof ZodError;
}

export function isValidationError(error: unknown): error is ZodError {
  return checkZodError(error);
}

export function createValidationErrorResponse(
  error: ZodError,
): ValidationError {
  return {
    status: 400,
    data: {
      message: createValidationErrorMessage(error),
    },
  };
}

function createValidationErrorMessage(error: ZodError): string {
  if (
    error.issues.length === 1 &&
    error.issues[0].code === 'invalid_type' &&
    error.issues[0].message !== 'Required'
  ) {
    return 'invalid body request';
  }
  return error.issues
    .map((issue) => issue.path[0] + ' ' + issue.message.toLowerCase())
    .join(', ');
}

export type ValidationError = HttpResponseBody<{ message: string }>;
