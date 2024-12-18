import type { Meta, StoryObj } from '@storybook/react';
import Accordion, { IAccordionProps } from './Accordion';

const meta: Meta = {
  title: 'theme/partials/ui/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accordionItems: [
      { icon: 'star', label: 'Item 1', content: '<p>Content 1</p>', disabled: false },
      { icon: 'call', label: 'Item 2', content: '<p>Content 2</p>', disabled: false },
      { icon: 'info', label: 'Item 3', content: '<p>Content 3</p>', disabled: true },
    ],
    size: 'medium',
    expandIcon: 'expand_more',
    collapseIcon: 'expand_less',
    hideDivider: false,
    accordionClasses: 'custom-accordion-class',
    richTextFormatting: true,
  } satisfies IAccordionProps,
};

export const WithoutIcons: Story = {
  args: {
    accordionItems: [
      { label: 'Item 1', content: '<p>Content 1</p>', disabled: false },
      { label: 'Item 2', content: '<p>Content 2</p>', disabled: false },
      { label: 'Item 3', content: '<p>Content 3</p>', disabled: true },
    ],
    size: 'small',
    hideDivider: true,
    accordionClasses: 'custom-accordion-class',
    richTextFormatting: false,
  } satisfies IAccordionProps,
};