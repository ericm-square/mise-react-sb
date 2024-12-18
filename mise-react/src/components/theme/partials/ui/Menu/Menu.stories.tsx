import type { Meta, StoryObj } from '@storybook/react';
import Menu, { IMenuItem } from './Menu';

const meta: Meta = {
  title: 'theme/partials/ui/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: IMenuItem[] = [
  { label: 'Item 1', value: 'item1', disabled: false, attributes: {} },
  { label: 'Item 2', value: 'item2', disabled: false, attributes: {} },
  { label: 'Item 3', value: 'item3', disabled: true, attributes: {} },
];

export const Default: Story = {
  args: {
    items,
    size: 'medium',
    menuClasses: 'default-menu',
  },
};

export const SmallSize: Story = {
  args: {
    items,
    size: 'small',
    menuClasses: 'small-menu',
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      ...items,
      { label: 'Disabled Item', value: 'disabledItem', disabled: true, attributes: {} },
    ],
    size: 'medium',
    menuClasses: 'menu-with-disabled-item',
  },
};