import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '..');

const readJson = (file: string) => JSON.parse(fs.readFileSync(file, 'utf8'));

describe('portfolio configuration', () => {
  it('loads site configuration and required sections', () => {
    const site = readJson(path.join(root, 'src', 'data', 'site.json'));

    expect(site.person.name).toBeTruthy();
    expect(site.contact.email).toBeTruthy();
    expect(Array.isArray(site.projects.featured)).toBe(true);
    expect(Array.isArray(site.projects.other)).toBe(true);
  });

  it('links configured projects to real project files', () => {
    const site = readJson(path.join(root, 'src', 'data', 'site.json'));
    const projectDir = path.join(root, 'src', 'content', 'projects');
    const projectFiles = fs
      .readdirSync(projectDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));

    const configured = [...site.projects.featured, ...site.projects.other];
    for (const slug of configured) {
      expect(projectFiles).toContain(slug);
    }
  });
});
