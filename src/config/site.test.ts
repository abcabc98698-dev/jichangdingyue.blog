import { expect, it } from 'vitest';
import { site, parseSite, resolveSiteUrl } from './site';

it('provides replaceable product identity', () => {
  expect(site.name).toBe('机场订阅');
  expect(site.repository).toBe('https://jichangdingyue.blog');
  expect(site.url).toBe('https://jichangdingyue.blog');
  expect(site.install[0].command).toContain('订阅');
});

it('rejects script URLs', () => {
  expect(() => parseSite({ ...site, repository: 'javascript:alert(1)' })).toThrow();
});

it('rejects invalid navigation paths', () => {
  expect(() => parseSite({ ...site, nav: [{ href: '//evil.example', key: 'nav.home' }] })).toThrow();
});

it('resolves site URL correctly', () => {
  expect(resolveSiteUrl(undefined)).toBe('https://jichangdingyue.blog');
  expect(resolveSiteUrl('  ')).toBe('https://jichangdingyue.blog');
  expect(resolveSiteUrl('https://demo.example')).toBe('https://demo.example');
  expect(() => resolveSiteUrl('javascript:alert(1)')).toThrow();
});
