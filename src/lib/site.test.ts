import { describe, expect, it } from 'vitest';
import { isActive } from './site';

describe('isActive', () => {
  it('marks Home only on the root path', () => {
    expect(isActive('/', '/')).toBe(true);
    expect(isActive('/', '/brands')).toBe(false);
  });

  it('marks a section on its own path and its children', () => {
    expect(isActive('/brands', '/brands')).toBe(true);
    expect(isActive('/brands', '/brands/guangsu')).toBe(true);
    expect(isActive('/brands', '/brands/')).toBe(true);
  });

  it('does not match a section that only shares a prefix', () => {
    expect(isActive('/brand', '/brands')).toBe(false);
  });
});
