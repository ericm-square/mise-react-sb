import '@market/web-components/dist/market/market.css';
import { defineCustomElements } from '@market/web-components/loader';
import React from 'react';
import type { Preview } from "@storybook/react";
import '../src/global.css';
// import '../src/base.css';  // TODO: Maybe we need this
import '../src/variables.css';

defineCustomElements(window);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <div className="story-wrapper" data-market-features="typography">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
