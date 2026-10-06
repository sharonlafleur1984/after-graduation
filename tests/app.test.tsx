import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../src/app';

describe('App', () => {
  it('has one page title', () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});
