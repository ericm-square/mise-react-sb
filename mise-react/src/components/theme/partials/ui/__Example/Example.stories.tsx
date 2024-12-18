import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta = {
  title: 'theme/partials/ui/Example',
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'left',
    content: 'Hello, world!',
  },
};
