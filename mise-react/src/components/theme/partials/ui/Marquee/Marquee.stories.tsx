import type { Meta, StoryObj } from '@storybook/react';
import Marquee from './Marquee';

const meta: Meta = {
  title: 'theme/partials/ui/Marquee',
  component: Marquee,
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftToRight: Story = {
  args: {
    direction: 'left',
    content: 'Hello, world!',
  },
};

export const RightToLeft: Story = {
  args: {
    direction: 'right',
    content: 'Hello, world!',
  },
};
