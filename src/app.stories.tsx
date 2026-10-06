import type { Meta, StoryObj } from '@storybook/react-vite';
import { App } from './app';

// This Storybook shows whole pages only. Every component lives in the design system's Storybook.
const meta: Meta<typeof App> = { title: 'Pages/App', component: App, parameters: { layout: 'fullscreen' } };
export default meta;

export const Default: StoryObj<typeof App> = {};
