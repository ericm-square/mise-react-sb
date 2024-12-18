import type { Meta, StoryObj } from '@storybook/react';
import Price from './Price';

const meta: Meta = {
  title: 'theme/partials/ui/Price',
  component: Price,
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: {
      regular_low: {
        amount: 100,
        formatted: '$100',
      },
      low: {
        amount: 80,
        formatted: '$80',
      },
      regular_high: {
        amount: 120,
        formatted: '$120',
      },
      currency: 'USD',
    },
    onSale: true,
    size: 'normal',
    variant: 'standard',
    color: '#000',
    weight: 'bold',
    bold: true,
    italic: 'italic',
    priceClasses: 'custom-price-class',
    unitSuffix: 'kg',
  },
};

export const SaleVariant: Story = {
  args: {
    price: {
      regular_low: {
        amount: 100,
        formatted: '$100',
      },
      low: {
        amount: 80,
        formatted: '$80',
      },
      regular_high: {
        amount: 120,
        formatted: '$120',
      },
      currency: 'USD',
    },
    onSale: true,
    size: 'normal',
    variant: 'sale',
    color: '#ff0000',
    weight: 'bold',
    bold: true,
    italic: 'italic',
    priceClasses: 'custom-price-class',
    unitSuffix: 'kg',
  },
};

export const NoSale: Story = {
  args: {
    price: {
      regular_low: {
        amount: 100,
        formatted: '$100',
      },
      low: {
        amount: 100,
        formatted: '$100',
      },
      regular_high: {
        amount: 120,
        formatted: '$120',
      },
      currency: 'USD',
    },
    onSale: false,
    size: 'normal',
    variant: 'standard',
    color: '#000',
    weight: 'normal',
    bold: false,
    italic: 'normal',
    priceClasses: 'custom-price-class',
    unitSuffix: 'kg',
  },
};
