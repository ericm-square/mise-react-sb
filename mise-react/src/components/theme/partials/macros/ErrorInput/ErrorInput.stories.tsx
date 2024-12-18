import type { Meta, StoryObj } from '@storybook/react';
import ErrorInput from './ErrorInput';

const meta: Meta = {
  title: 'theme/partials/macros/ErrorInput',
  component: ErrorInput,
} satisfies Meta<typeof ErrorInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    message: 'This is an error message.',
  },
};

export const WithoutMessage: Story = {
  args: {
    id: 'without-message',
  },
};

export const CustomId: Story = {
  args: {
    id: 'custom-id',
    message: 'Custom ID error message.',
  },
};