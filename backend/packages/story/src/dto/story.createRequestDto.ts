import z from 'zod';

export const StoryCreateRequestDto = z.object({
  author: z.string().min(1).max(255),
  title: z.string().min(1).max(500),
  shortIntro: z.string().max(500),
  topic: z.string().max(255),
  markdownContent: z.string(),
  status: z.enum(['draft', 'publish', 'hide', 'delete']).default('draft'),
  createdAt: z.string().datetime().optional(),
});

export type StoryCreateRequestDto = z.infer<typeof StoryCreateRequestDto>;
