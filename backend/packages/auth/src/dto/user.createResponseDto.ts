import { HttpResponseBody } from '@heno7/common';

type UserCreateResponseDto = HttpResponseBody<{ id: number }>;

export default UserCreateResponseDto;
