import type { Meta, StoryObj } from '@storybook/react';
import ThemeLayout from './ThemeLayout';

const meta: Meta = {
  title: 'theme/layouts/ThemeLayout',
  component: ThemeLayout,
} satisfies Meta<typeof ThemeLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
