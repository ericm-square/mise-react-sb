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
    errorMessage: "There was an error",
    label: "My Label",
    options: [
      { label: 'Item 1', value: 'item1', disabled: false, attributes: {} },
      { label: 'Item 2', value: 'item2', disabled: false, attributes: {} },
      { label: 'Item 3', value: 'item3', disabled: true, attributes: {} },
    ]
  },
};
