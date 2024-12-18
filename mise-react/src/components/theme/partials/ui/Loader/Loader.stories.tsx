import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta: Meta = {
  title: 'theme/partials/ui/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    contrast: false,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    contrast: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    contrast: false,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'extra-large',
    contrast: false,
  },
};

export const Contrast: Story = {
  args: {
    size: 'medium',
    contrast: true,
  },
};
