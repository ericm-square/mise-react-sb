import type { Meta, StoryObj } from '@storybook/react';
import GoogleMap from './GoogleMap';

const meta: Meta = {
  title: 'theme/partials/ui/GoogleMap',
  component: GoogleMap,
} satisfies Meta<typeof GoogleMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'left',
    content: 'Hello, world!',
  },
};
