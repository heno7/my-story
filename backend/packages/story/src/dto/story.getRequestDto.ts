import z from 'zod';

export const GetStoriesRequestDto = z.object({
  status: z
    .enum(['draft', 'publish', 'hide', 'delete'])
    .optional()
    .default('publish'),
  author: z.string().optional().default('all'),
});

export type GetStoriesRequestDto = z.infer<typeof GetStoriesRequestDto>;
