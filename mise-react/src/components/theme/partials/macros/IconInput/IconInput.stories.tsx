import type { Meta, StoryObj } from '@storybook/react';
import IconInput from './IconInput';

const meta: Meta = {
  title: 'theme/partials/macros/IconInput',
  component: IconInput,
} satisfies Meta<typeof IconInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default-icon',
    color: 'currentColor',
    stroke: 'none',
    iconClasses: 'default-icon-class',
    ariaHidden: true,
    attributes: {},
    hiddenLabel: 'Default Icon',
    width: '24px',
    height: '24px',
  },
};

export const CustomIcon: Story = {
  args: {
    name: 'custom-icon',
    color: '#ff0000',
    stroke: '#000000',
    iconClasses: 'custom-icon-class',
    ariaHidden: false,
    attributes: { 'data-custom': 'value' },
    hiddenLabel: 'Custom Icon',
    width: '32px',
    height: '32px',
  },
};