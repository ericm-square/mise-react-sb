import type { Meta, StoryObj } from '@storybook/react';
import Notice from './Notice';

const meta: Meta = {
  title: 'theme/partials/ui/Notice',
  component: Notice,
} satisfies Meta<typeof Notice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Notice',
    message: 'This is a default notice message.',
    variant: 'normal',
    linkPosition: 'bottom',
  },
};

export const InfoNotice: Story = {
  args: {
    title: 'Info Notice',
    message: 'This is an informational notice message.',
    variant: 'info',
    linkPosition: 'bottom',
  },
};

export const SuccessNotice: Story = {
  args: {
    title: 'Success Notice',
    message: 'This is a success notice message.',
    variant: 'success',
    linkPosition: 'bottom',
  },
};

export const WarningNotice: Story = {
  args: {
    title: 'Warning Notice',
    message: 'This is a warning notice message.',
    variant: 'warning',
    linkPosition: 'bottom',
  },
};

export const CriticalNotice: Story = {
  args: {
    title: 'Critical Notice',
    message: 'This is a critical notice message.',
    variant: 'critical',
    linkPosition: 'bottom',
  },
};

export const NoticeWithLink: Story = {
  args: {
    title: 'Notice with Link',
    message: 'This notice has a link.',
    variant: 'normal',
    linkText: 'Click here',
    linkAction: () => alert('Link clicked!'),
    linkPosition: 'bottom',
  },
};

export const NoticeWithTwoLinks: Story = {
  args: {
    title: 'Notice with Two Links',
    message: 'This notice has two links.',
    variant: 'normal',
    linkText: 'First link',
    linkAction: () => alert('First link clicked!'),
    secondLinkText: 'Second link',
    secondLinkAction: () => alert('Second link clicked!'),
    linkPosition: 'bottom',
  },
};

export const NoticeWithoutCloseButton: Story = {
  args: {
    title: 'Notice without Close Button',
    message: 'This notice does not have a close button.',
    variant: 'normal',
    linkPosition: 'bottom',
    removeCloseButton: true,
  },
};
