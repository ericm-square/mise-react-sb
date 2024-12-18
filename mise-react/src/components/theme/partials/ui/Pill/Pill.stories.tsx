import type { Meta, StoryObj } from '@storybook/react';
import Pill from './Pill';

const meta: Meta = {
  title: 'theme/partials/ui/Pill',
  component: Pill,
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Pill',
    type: 'info',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: '',
  },
};

export const SuccessPill: Story = {
  args: {
    label: 'Success Pill',
    type: 'success',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: '',
  },
};

export const WarningPill: Story = {
  args: {
    label: 'Warning Pill',
    type: 'warning',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: '',
  },
};

export const CriticalPill: Story = {
  args: {
    label: 'Critical Pill',
    type: 'critical',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: '',
  },
};

export const InteractivePill: Story = {
  args: {
    label: 'Interactive Pill',
    type: 'info',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: true,
    shouldAnnounce: false,
    pillClasses: '',
  },
};
