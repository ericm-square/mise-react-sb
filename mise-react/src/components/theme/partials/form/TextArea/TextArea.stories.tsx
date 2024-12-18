import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta = {
  title: 'theme/partials/form/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Label',
    hint: 'This is a hint',
    name: 'default',
    rows: 3,
    max: 100,
    errorMessage: '',
    disabled: false,
  },
};

export const WithError: Story = {
  args: {
    label: 'Error Label',
    hint: 'This is a hint',
    name: 'error',
    rows: 3,
    max: 100,
    errorMessage: 'This is an error message',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Label',
    hint: 'This is a hint',
    name: 'disabled',
    rows: 3,
    max: 100,
    errorMessage: '',
    disabled: true,
  },
};

export const CustomClasses: Story = {
  args: {
    label: 'Custom Classes Label',
    hint: 'This is a hint',
    name: 'custom-classes',
    rows: 3,
    max: 100,
    errorMessage: '',
    disabled: false,
    textareaClasses: 'custom-class',
  },
};
