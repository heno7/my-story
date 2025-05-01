import z from 'zod';

const TokenCreateRequestDto = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

type TokenCreateRequestDto = z.infer<typeof TokenCreateRequestDto>;

export default TokenCreateRequestDto;
