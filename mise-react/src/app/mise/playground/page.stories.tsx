import type { Meta, StoryObj } from '@storybook/react';
import PlaygroundPage from './page';

const meta: Meta = {
  title: 'pages/mise/Playground',
  component: PlaygroundPage,
} satisfies Meta<typeof PlaygroundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
