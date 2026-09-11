import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    month: z.number(),
    year: z.number(),
    technologies: z.array(z.string()),
    logo: z.string().optional(),
    image: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    package: z.string().url().optional(),
    buttons: z
      .array(
        z.object({
          text: z.string(),
          link: z.string().url(),
          icon: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

const reportCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    project: z.string(),
    projectSlug: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
  reports: reportCollection,
};
