export interface HttpResponseBody<T> {
  status: number;
  data: T;
}

export function createHttpResponseBody<T>(
  status: number,
  data: T,
): HttpResponseBody<T> {
  return { status, data };
}
