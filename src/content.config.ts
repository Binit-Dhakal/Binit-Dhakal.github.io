import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  papers: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/papers' }),
    schema: commonSchema,
  }),
  books: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
    schema: commonSchema.extend({
      author: z.string().optional(),
      rating: z.number().min(1).max(5).optional(),
    }),
  }),
  blogs: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
    schema: commonSchema,
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: commonSchema.extend({
      repo: z.string().url().optional(),
      tech: z.array(z.string()).optional(),
    }),
  }),
};