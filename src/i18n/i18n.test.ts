import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, LOCALES, htmlLang, localizePath, toLocale } from './locales';
import { ui, useTranslations } from './ui';

describe('locales', () => {
  it('serves Simplified Chinese by default', () => {
    expect(DEFAULT_LOCALE).toBe('zh-CN');
    expect(LOCALES).toEqual(['zh-CN']);
  });

  it('falls back to default for unknown values', () => {
    expect(toLocale(undefined)).toBe('zh-CN');
    expect(toLocale('fr')).toBe('zh-CN');
  });

  it('maps locales to BCP 47 html lang values', () => {
    expect(htmlLang('zh-CN')).toBe('zh-CN');
  });
});

describe('localizePath', () => {
  it('keeps paths unprefixed', () => {
    expect(localizePath('/brands')).toBe('/brands');
    expect(localizePath('/')).toBe('/');
  });
});

describe('ui dictionary', () => {
  it('has no empty strings in zh-CN', () => {
    for (const [key, value] of Object.entries(ui['zh-CN'])) {
      expect(value.trim(), `zh-CN.${key}`).not.toBe('');
    }
  });

  it('translates navigation keys properly', () => {
    const t = useTranslations('zh-CN');
    expect(t('nav.home')).toBe('首页');
    expect(t('nav.brands')).toBe('品牌测评库');
  });
});
