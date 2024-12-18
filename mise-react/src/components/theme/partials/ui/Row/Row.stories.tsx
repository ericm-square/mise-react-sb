import type { Meta, StoryObj } from '@storybook/react';
import Row from './Row';

const meta: Meta = {
  title: 'theme/partials/ui/Row',
  component: Row,
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Title',
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    title: 'Selected Row',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Disabled Row',
  },
};

export const WithLeading: Story = {
  args: {
    leading: <span>Leading Content</span>,
    title: 'Row with Leading',
  },
};

export const WithText: Story = {
  args: {
    title: 'Row with Text',
    text: 'This is some additional text.',
  },
};

export const WithTrailing: Story = {
  args: {
    title: 'Row with Trailing',
    trailing: <span>Trailing Content</span>,
  },
};

export const FullExample: Story = {
  args: {
    selected: true,
    disabled: false,
    leading: <span>Leading Content</span>,
    title: 'Full Example Row',
    text: 'This is some additional text.',
    trailing: <span>Trailing Content</span>,
  },
};
