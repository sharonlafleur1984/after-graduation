import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

// The rule: every component comes from the design system. The app only arranges them on a page,
// so any CSS it has may use design tokens, never its own colors, sizes or spacing.
const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : [p];
  });
const src = files('src');

describe('the app uses only the design system', () => {
  it.each(src.filter((f) => f.endsWith('.css')))('%s has no made-up values', (file) => {
    const css = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    expect(css, 'a raw color').not.toMatch(/#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(/i);
    expect(css, 'a raw size').not.toMatch(/(?<![\w-])(?!0[a-z%])\d*\.?\d+(px|rem|em)\b/);
    expect(css, 'a raw font weight').not.toMatch(/font-weight:\s*\d/);
  });

  it.each(src.filter((f) => f.endsWith('.tsx')))('%s has no inline styles', (file) => {
    expect(readFileSync(file, 'utf8')).not.toMatch(/style=\{\{/);
  });
});
