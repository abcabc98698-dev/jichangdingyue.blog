import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import { pageMetadata, robotsBody } from './seo';

it('builds absolute base-aware canonical link', () => {
  const meta = pageMetadata('https://jichangdingyue.blog', '/', '/brands', '品牌测评库', '测评大全');
  expect(meta.canonical).toBe('https://jichangdingyue.blog/brands');
  expect(meta.alternates['zh-CN']).toBe('https://jichangdingyue.blog/brands');
});

it('points robots at the sitemap index and disallows /go/ redirects', () => {
  const robots = robotsBody('https://jichangdingyue.blog', '/');
  expect(robots).toContain('Disallow: /go/');
  expect(robots).toContain('Sitemap: https://jichangdingyue.blog/sitemap-index.xml');
});

it('includes sitemap integration in astro.config.mjs', () => {
  const config = readFileSync(new URL('../../astro.config.mjs', import.meta.url), 'utf8');
  expect(config).toContain('@astrojs/sitemap');
  expect(config).not.toContain(['terminalnoir', 'web.app'].join('.'));
});
