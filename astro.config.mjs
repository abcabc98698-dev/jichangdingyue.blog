import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site: 'https://jichangdingyue.blog',
  base,
  output: 'static',
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes('/go/'),
    }),
  ],
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  preview: {
    host: '127.0.0.1',
    port: Number(process.env.PREVIEW_PORT || 4321),
    strictPort: true,
  },
});
