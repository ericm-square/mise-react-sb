/* eslint-disable @next/next/no-page-custom-font */
import { defineCustomElements } from '@market/web-components/loader';
import React from 'react';
import type { Preview } from "@storybook/react";
import '../src/global.css';
import '../src/base.css';  // TODO: Maybe we need this
import '../src/variables.css';
import '../src/shared.css';
import '../src/transitions.css';
import '../src/animations.css';
import '../src/theme-variables.css';
// import '@market/web-components/dist/market/market.css';

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
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <div className="story-wrapper" data-market-features="typography">
            <Story />
          </div>
        </>
      );
    },
  ],
};

export default preview;
