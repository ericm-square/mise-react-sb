import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta = {
  title: 'theme/components/sections/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
};
