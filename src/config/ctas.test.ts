import { expect, it } from 'vitest';
import { site, parseSite } from './site';
import { getCtas } from '../lib/ctas';

it('resolves ctas for zh-CN', () => {
  const ctas = getCtas('zh-CN', '/');
  expect(ctas.header.label).toBe('机场推荐');
  expect(ctas.header.href).toBe('/brands');
  expect(ctas.hero.primary.label).toBe('品牌评测库');
  expect(ctas.hero.primary.href).toBe('/brands');
});

it.each(['javascript:alert(1)', '//evil.example', '/\\evil.example'])('rejects unsafe CTA links: %s', href => {
  const input = structuredClone(site);
  input.ctas['zh-CN'].header.href = href;
  expect(() => parseSite(input)).toThrow();
});
