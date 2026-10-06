import type { Preview } from '@storybook/react-vite';
import '../src/design-system';

document.documentElement.setAttribute('data-theme', 'after-graduation');

const preview: Preview = {
  // Fails a story on any accessibility problem axe can find.
  parameters: { a11y: { test: 'error' } },
};
export default preview;
