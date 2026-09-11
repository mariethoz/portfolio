import { getCollection } from 'astro:content';
import siteConfig from '../data/site.json';

export type ProjectListType = 'featured' | 'other';

export function sitePath(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export async function getConfiguredProjectEntries(listType: ProjectListType) {
  const projectEntries = await getCollection('projects');
  const slugs = siteConfig.projects[listType] as string[];
  const projectMap = new Map(
    projectEntries.map((project) => [project.id.replace(/\.md$/, ''), project]),
  );

  return slugs.map((slug: string) => {
    const project = projectMap.get(slug);
    if (!project) {
      throw new Error(`Configured ${listType} project "${slug}" does not exist.`);
    }
    return project;
  });
}

export async function getFeaturedProjects() {
  return getConfiguredProjectEntries('featured');
}

export async function getOtherProjects() {
  return getConfiguredProjectEntries('other');
}

export async function getProjectBySlug(slug: string) {
  const project = (await getCollection('projects')).find(
    (entry) => entry.id.replace(/\.md$/, '') === slug,
  );

  if (!project) {
    throw new Error(`Project "${slug}" does not exist.`);
  }

  return project;
}

export { siteConfig };
