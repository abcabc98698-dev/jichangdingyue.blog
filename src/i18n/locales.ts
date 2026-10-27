import { alternate } from '../lib/urls';

export const LOCALES = ['zh-CN'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh-CN';

export const LOCALE_LABELS: Record<Locale, { short: string; name: string }> = {
  'zh-CN': { short: '中', name: '简体中文' },
};

export function toLocale(_value: string | undefined): Locale {
  return DEFAULT_LOCALE;
}

export function htmlLang(_locale: Locale = 'zh-CN'): string {
  return 'zh-CN';
}

export function localizePath(path: string, _locale: Locale = 'zh-CN'): string {
  return path;
}

export function switchLocalePath(pathname: string, target: Locale = 'zh-CN', base = '/'): string {
  return alternate(pathname, target, base);
}
