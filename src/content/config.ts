import { z, defineCollection } from 'astro:content';

const details = defineCollection({
  schema: {
    heading: z.string(),
    order: z.number()
  }
})

const faqs = defineCollection({
  schema: {
    question: z.string(),
    order: z.number(),
  },
});

export const collections = {
  'faqs': faqs,
  'details': details,
};