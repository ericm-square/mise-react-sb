import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta = {
  title: 'theme/partials/ui/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default-tooltip',
    show: true,
    variant: 'normal',
    menuSize: 'medium',
    items: [{ label: 'Item 1', value: 'Item 1' }, { label: 'Item 2', value: 'Item 2' }, { label: 'Item 3', value: 'Item 3' },]
  },
};

export const MenuVariant: Story = {
  args: {
    id: 'menu-tooltip',
    show: true,
    variant: 'menu',
    menuTemplateId: 'menu-template',
    menuSize: 'small',
    items: [{ label: 'Item 1', value: 'Item 1' }, { label: 'Item 2', value: 'Item 2' }, { label: 'Item 3', value: 'Item 3' },]
  },
};

export const Borderless: Story = {
  args: {
    id: 'borderless-tooltip',
    show: true,
    variant: 'normal',
    menuSize: 'medium',
    borderless: true,
    items: [{ label: 'Item 1', value: 'Item 1' }, { label: 'Item 2', value: 'Item 2' }, { label: 'Item 3', value: 'Item 3' },]
  },
};

export const FullWidth: Story = {
  args: {
    id: 'fullwidth-tooltip',
    show: true,
    variant: 'normal',
    menuSize: 'medium',
    fullWidth: true,
    items: [{ label: 'Item 1', value: 'Item 1' }, { label: 'Item 2', value: 'Item 2' }, { label: 'Item 3', value: 'Item 3' },]
  },
};

export const Flush: Story = {
  args: {
    id: 'flush-tooltip',
    show: true,
    variant: 'normal',
    menuSize: 'medium',
    flush: true,
    items: [{ label: 'Item 1', value: 'Item 1' }, { label: 'Item 2', value: 'Item 2' }, { label: 'Item 3', value: 'Item 3' },]
  },
};