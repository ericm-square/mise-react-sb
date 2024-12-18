import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta = {
  title: 'theme/partials/ui/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    variant: 'primary',
    size: 'medium',
    iconPrefix: '🔍',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
  },
};
