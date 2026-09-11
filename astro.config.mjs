// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const basePath = '/portfolio';

/** @typedef {{ type: string, properties?: Record<string, unknown>, children?: Node[] }} Node */

function rehypeBasePath() {
  /** @param {Node} tree */
  return (tree) => {
    /** @param {Node} node */
    const visit = (node) => {
      if (node.type === 'element' && node.properties) {
        for (const property of ['href', 'src']) {
          const value = node.properties[property];
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith(basePath)) {
            node.properties[property] = `${basePath}${value}`;
          }
        }
      }

      for (const child of node.children ?? []) {
        visit(child);
      }
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://mariethoz.github.io',
  base: basePath,
  markdown: {
    rehypePlugins: [rehypeBasePath],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
