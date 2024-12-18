import type { Meta, StoryObj } from '@storybook/react';
import Placeholder from './Placeholder';

const meta: Meta = {
  title: 'theme/partials/ui/Placeholder',
  component: Placeholder,
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

const MockLoaderComponent = () => <div>Loading...</div>;
const MockIconComponent = ({ name, className }: { name: string;
  className?: string; }) => (
    <div className={className}>{name}</div>
);

export const Default: Story = {
  args: {
    icon: 'image',
    isLoading: false,
    IconComponent: MockIconComponent,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    LoaderComponent: MockLoaderComponent,
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: 'custom-icon',
    isLoading: false,
    IconComponent: MockIconComponent,
  },
};
