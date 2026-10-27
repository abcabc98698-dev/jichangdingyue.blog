import { expect, it } from 'vitest';
import { asset, route, alternate } from './urls';

it('composes routes correctly', () => {
  expect(route('/', 'zh-CN', '/')).toBe('/');
  expect(route('/brands', 'zh-CN', '/')).toBe('/brands');
  expect(route('/brands#top', 'zh-CN', '/')).toBe('/brands#top');
});

it('resolves assets from the base', () => {
  expect(asset('/favicon.svg', '/')).toBe('/favicon.svg');
  expect(asset('/og-image.svg', '/')).toBe('/og-image.svg');
});
