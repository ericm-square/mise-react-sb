import type { Meta, StoryObj } from '@storybook/react';
import CheckboxSingle from './CheckboxSingle';

const meta: Meta = {
  title: 'theme/partials/form/CheckboxSingle',
  component: CheckboxSingle,
} satisfies Meta<typeof CheckboxSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    value: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    value: false,
    disabled: true,
  },
};

export const WithSublabel: Story = {
  args: {
    label: 'Checkbox with Sublabel',
    sublabel: 'This is a sublabel',
    value: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    value: false,
    indeterminate: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Checkbox',
    value: false,
    isRequired: true,
  },
};
