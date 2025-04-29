import z from 'zod';

const UserCreateRequestDto = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(255),
  password: z.string().min(8).max(255),
  role: z.enum(['admin', 'writer', 'reader']).default('reader'),
});

type UserCreateRequestDto = z.infer<typeof UserCreateRequestDto>;

export default UserCreateRequestDto;
