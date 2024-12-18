import type { Meta, StoryObj } from '@storybook/react';
import OrderPage from './page';

const meta: Meta = {
  title: 'pages/mise/Order',
  component: OrderPage,
} satisfies Meta<typeof OrderPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
};
