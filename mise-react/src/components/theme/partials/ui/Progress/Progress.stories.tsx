import type { Meta, StoryObj } from '@storybook/react';
import Progress from './Progress';

const meta: Meta = {
  title: 'theme/partials/ui/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 50,
    size: 'small',
    progressClasses: '',
  },
};

export const WithParentModel: Story = {
  args: {
    percentage: 75,
    size: 'medium',
    progressClasses: '',
    parentModel: 'exampleModel',
  },
};

export const EmptyProgress: Story = {
  args: {
    percentage: 0,
    size: 'large',
    progressClasses: '',
  },
};

export const FullProgress: Story = {
  args: {
    percentage: 100,
    size: 'extra-large',
    progressClasses: '',
  },
};
