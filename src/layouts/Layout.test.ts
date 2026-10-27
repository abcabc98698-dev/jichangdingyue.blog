import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, it } from 'vitest';
import Layout from './Layout.astro';
import { site } from '../config/site';

it('renders configured identity and does not contain legacy theme links', async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Layout, { request: new Request('https://jichangdingyue.blog/') });
  expect(html).toContain(site.terminalLabel);
  expect(html).toContain(site.name);
  expect(html).not.toContain('nandomoreirame');
  expect(html).not.toContain('nandomoreira.dev');
  expect(html).not.toContain(['terminalnoir', 'web.app'].join('.'));
});

it('renders pure Chinese canonical and metadata', async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Layout, {
    request: new Request('https://jichangdingyue.blog/'),
  });
  const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? '';
  expect(footer).toContain('网络可观测性评测中心');
  expect(html).toContain('lang="zh-CN"');
  expect(html).toContain('https://jichangdingyue.blog/');
});
