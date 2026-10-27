import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, it } from 'vitest';
import Home from './Home.astro';
import { site } from '../config/site';

it('renders home page with airport observatory branding', async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Home, { request: new Request('https://jichangdingyue.blog/') });
  expect(html).toContain('告别虚标与断联');
  expect(html).toContain('/brands');
  expect(html).toContain('/topics');
  expect(html).toContain('光速云');
  expect(html).not.toContain('nandomoreirame');
});
