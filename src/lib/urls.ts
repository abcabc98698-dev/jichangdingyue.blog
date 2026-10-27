export type Locale = 'zh-CN';

const normalize = (value: string) => '/' + value.split('/').filter(Boolean).join('/');

export function route(path: string, _locale: Locale = 'zh-CN', base = '/'): string {
  const [pathname, hash] = path.split('#');
  const parts = [base, pathname];
  const result = normalize(parts.join('/'));
  return hash === undefined ? result : `${result}#${hash}`;
}

export function alternate(pathname: string, _locale: Locale = 'zh-CN', base = '/'): string {
  const prefix = normalize(base);
  let local = pathname;
  if (prefix !== '/' && (local === prefix || local.startsWith(prefix + '/'))) local = local.slice(prefix.length) || '/';
  local = local.replace(/^\/(?:pt-br|en)(?=\/|$)/, '') || '/';
  return route(local, 'zh-CN', base);
}

export function asset(path: string, base = '/'): string {
  const prefix = normalize(base);
  const file = normalize(path);
  return prefix === '/' ? file : `${prefix}${file}`;
}
