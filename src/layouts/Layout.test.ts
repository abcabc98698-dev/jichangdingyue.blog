import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, it } from 'vitest';
import Layout from './Layout.astro';
import { site } from '../config/site';

it('renders configured identity and repository', async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Layout, { request: new Request('https://example.com/') });
  expect(html).toContain(site.terminalLabel);
  expect(html).toContain(site.repository);
  expect(html).not.toContain(['terminalnoir', 'web.app'].join('.'));
});
