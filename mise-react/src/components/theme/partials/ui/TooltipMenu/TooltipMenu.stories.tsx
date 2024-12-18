import type { Meta, StoryObj } from '@storybook/react';
import TooltipMenu, { ITooltipMenuProps } from './TooltipMenu';
import { IMenuItem } from '../Menu/Menu';

const meta: Meta = {
  title: 'theme/partials/ui/TooltipMenu',
  component: TooltipMenu,
} satisfies Meta<typeof TooltipMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: IMenuItem[] = [
  { label: 'Item 1', value: 'Item 1' },
  { label: 'Item 2', value: 'Item 2' },
  { label: 'Item 3', value: 'Item 3' },
];

export const SmallMenu: Story = {
  args: {
    items,
    menuSize: 'small',
  } as ITooltipMenuProps,
};

export const MediumMenu: Story = {
  args: {
    items,
    menuSize: 'medium',
  } as ITooltipMenuProps,
};

export const WithSelectedItem: Story = {
  args: {
    items,
    menuSize: 'medium',
    selectedItem: items[1],
  } as ITooltipMenuProps,
};