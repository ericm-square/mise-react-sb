import type { Meta, StoryObj } from '@storybook/react';
import LabelInput from './LabelInput';

const meta: Meta = {
  title: 'theme/partials/macros/LabelInput',
  component: LabelInput,
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'left',
    content: 'Hello, world!',
  },
};
