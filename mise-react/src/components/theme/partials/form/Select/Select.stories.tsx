import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta = {
  title: 'theme/partials/form/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMessage: "There was an error"
  },
};
