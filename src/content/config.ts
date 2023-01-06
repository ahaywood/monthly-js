import { z, defineCollection } from 'astro:content';

const faqs = defineCollection({
  schema: {
    question: z.string(),
    order: z.number(),
  },
});

export const collections = {
  'faqs': faqs,
};