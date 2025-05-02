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
      message: error.issues
        .map((issue) => {
          if (issue.code === 'invalid_type') return 'invalid body request';
          return issue.path[0] + ' ' + issue.message.toLowerCase();
        })
        .join(', '),
    },
  };
}

export type ValidationError = HttpResponseBody<{ message: string }>;
