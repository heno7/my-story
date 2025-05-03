import z from 'zod';

export const StoryCreateRequestDto = z.object({
  author: z.string().min(1).max(255),
  title: z.string().min(1).max(500),
  shortIntro: z.string().max(500).optional(),
  topic: z.string().max(255).optional(),
  markdownContent: z.string().optional(),
  status: z.enum(['draft', 'publish', 'hide', 'delete']).default('draft'),
  createdAt: z.string().datetime().optional(),
});

export type StoryCreateRequestDto = z.infer<typeof StoryCreateRequestDto>;
