interface HttpResponseBody<T> {
  status: number;
  data: T;
}

function createHttpResponseBody<T>(
  status: number,
  data: T,
): HttpResponseBody<T> {
  return { status, data };
}

export { HttpResponseBody, createHttpResponseBody };
