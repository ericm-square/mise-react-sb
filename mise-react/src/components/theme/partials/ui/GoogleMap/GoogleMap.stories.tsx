import type { Meta, StoryObj } from '@storybook/react';
import GoogleMap from './GoogleMap';

const meta: Meta = {
  title: 'theme/partials/ui/GoogleMap',
  component: GoogleMap,
} satisfies Meta<typeof GoogleMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default-map',
    themeColors: {
      primary: '#006aff',
      primary_contrast: '#ffffff',
    },
    mapConfig: {
      lat: 37.7749,
      long: -122.4194,
      height: '230px',
    },
  },
};

export const CustomColors: Story = {
  args: {
    id: 'custom-colors-map',
    themeColors: {
      primary: '#ff0000',
      primary_contrast: '#00ff00',
    },
    mapConfig: {
      lat: 34.0522,
      long: -118.2437,
      height: '300px',
    },
  },
};

export const NoThemeColors: Story = {
  args: {
    id: 'no-theme-colors-map',
    themeColors: {},
    mapConfig: {
      lat: 40.7128,
      long: -74.0060,
      height: '250px',
    },
  },
};