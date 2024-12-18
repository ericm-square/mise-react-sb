import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta = {
  title: 'theme/partials/ui/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'content',
    selected: false,
    disabled: false,
    invalid: false,
    cardClasses: '',
    children: (<>
      <h4>Title</h4>
      <p>Text goes here</p>
    </>),
  },
};

export const ActionCard: Story = {
  args: {
    variant: 'action',
    selected: false,
    disabled: false,
    invalid: false,
    cardClasses: '',
    children: (<>
      <h4>Title</h4>
      <p>Text goes here</p>
    </>),
  },
};

export const SelectedActionCard: Story = {
  args: {
    variant: 'action',
    selected: true,
    disabled: false,
    invalid: false,
    cardClasses: '',
    children: (<>
      <h4>Title</h4>
      <p>Text goes here</p>
    </>),
  },
};

export const DisabledActionCard: Story = {
  args: {
    variant: 'action',
    selected: false,
    disabled: true,
    invalid: false,
    cardClasses: '',
    children: (<>
      <h4>Title</h4>
      <p>Text goes here</p>
    </>),
  },
};

export const InvalidActionCard: Story = {
  args: {
    variant: 'action',
    selected: false,
    disabled: false,
    invalid: true,
    cardClasses: '',
    children: (<>
      <h4>Title</h4>
      <p>Text goes here</p>
    </>),
  },
};
