import type { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

const meta: Meta = {
  title: 'theme/partials/ui/Rating',
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ZeroStars: Story = {
  args: {
    average: 0,
  },
};

export const OneStar: Story = {
  args: {
    average: 1,
  },
};

export const TwoStars: Story = {
  args: {
    average: 2,
  },
};

export const ThreeStars: Story = {
  args: {
    average: 3,
  },
};

export const FourStars: Story = {
  args: {
    average: 4,
  },
};

export const FiveStars: Story = {
  args: {
    average: 5,
  },
};

export const HalfStar: Story = {
  args: {
    average: 0.5,
  },
};

export const MixedStars: Story = {
  args: {
    average: 3.5,
  },
};
