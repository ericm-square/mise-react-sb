import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

const meta: Meta = {
  title: 'theme/partials/ui/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumb: [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'Products',
        link: '/products',
      },
      {
        title: 'Shoes',
        link: '/products/shoes',
      },
      { title: 'Running Shoes' },
    ],
    size: 'small',
    uppercase: true,
  },
};

export const MediumSize: Story = {
  args: {
    breadcrumb: [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'About Us',
        link: '/about',
      },
      { title: 'Our Team' },
    ],
    size: 'medium',
    uppercase: false,
  },
};

export const LargeSize: Story = {
  args: {
    breadcrumb: [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'Services',
        link: '/services',
      },
      { title: 'Consulting' },
    ],
    size: 'large',
    uppercase: true,
  },
};

export const NoLinks: Story = {
  args: {
    breadcrumb: [
      { title: 'Step 1' },
      { title: 'Step 2' },
      { title: 'Step 3' },
    ],
    size: 'small',
    uppercase: false,
  },
};
