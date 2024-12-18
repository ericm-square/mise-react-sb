# mise-react-sb

This is a React implementation of Mise.
https://github.com/squareup/mise-theme

___
## View
To view the current progress, go here:
https://ericm-square.github.io/mise-react-sb/storybook-static


___
## Development

### Work on a Component
1. Run storybook
   1. `cd mise-react`
   2. `pnpm run storybook`
2. Create a new component
   1. Make a copy of `mise-react/src/components/theme/partials/ui/__Example`
   2. Go into each file and rename everything based on your new component

### Publish Storybook Changes to Public Website
If you added some components and want them to appear on the website, do this:
1. `cd mise-react`
2. `pnpm run build-storybook`
3. Make sure there are no errors!
4. If there are no errors, copy `mise-react/storybook-static` to `./storybook-static` (overwrite the folder basically)
5. Commit your changes
6. Wait a few minutes and the changes should be live, here: https://ericm-square.github.io/mise-react-sb/storybook-static

___
## AI Prompts
Here are a few prompts that you can use if you want

### Convert Component
1. With the `.html.twig` file open in VSCode, go to Github Copilot
2. Prompt:

Convert this to React. Use CSS modules. Keep all custom attributes and prefix them with data- if you have to. Keep all CSS class names exactly the same as they are. Make sure you keep the CSS class names exactly the same, even if they don't use standard variable name format!!!

Use this format for the component:
```tsx
import styles from './Example.module.css';

export interface IExampleProps {
  text: string;
}

export default function Example(props: IExampleProps) {
  const { text } = props;

  return (
    <div>{text}</div>
  );
}
```

### Create Storybook Stories
1. With the `.tsx` component open in VSCode, go to Github Copilot
2. Prompt:

Create some Storybook stories for this component.
Use this format:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.js';

const meta: Meta = {
  title: 'partials/ui/Example',
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'left',
    content: 'Hello, world!',
  },
};
```


___
## Data
Here is some data on the conversion process

| Component | Status | Notes | Time |
| :-------: | :----: | :---- | :--- |
| partials/form/Autocomplete | Incomplete |  | |
| partials/form/CheckboxSingle | | | |
| partials/form/Checkbox | | | |
| partials/form/ChoiceCarousel | | | |
| partials/form/Choice | | | |
| partials/form/Donation | | | |
| partials/form/GiftOptions | | | |
| partials/form/PriceRange | | | |
| partials/form/Radio | | | |
| partials/form/Search | | | |
| partials/form/Select | | | |
| partials/form/Stepper | | | |
| partials/form/Subscriptions | | | |
| partials/form/Swatches | | | |
| partials/form/Text | | | |
| partials/form/TextArea | | | 22:00 (Copilot) |
| partials/ui/Accordion | | | |
| partials/ui/ActionBar | | | |
| partials/ui/Breadcrumb | Complete | | |
| partials/ui/Button | Partial | - Sublabel doesn't work<br> - Dropdown doesn't work| |
| partials/ui/Card| Complete | | |
| partials/ui/CarouselSlide | | | |
| partials/ui/Carousel | | | |
| partials/ui/DialogButtons | | | |
| partials/ui/DialogContent | | | |
| partials/ui/DialogMultiPane | | | |
| partials/ui/Dialog | | | |
| partials/ui/GoogleMap | | | |
| partials/ui/Image | | | |
| partials/ui/Loader | Complete | | |
| partials/ui/Marquee | Complete | | |
| partials/ui/Menu | | | |
| partials/ui/Notice | Complete | - Would not convert the whole thing<br> - Made up CSS classes<br> - Mise possibly had a CSS bug (`font` instead of `font-size`)  | 23:02 (Copilot) |
| partials/ui/Overlay | | | |
| partials/ui/Pagination | | | |
| partials/ui/Pill | Complete | | |
| partials/ui/Placeholder | Partial | - Unsure if colors or positions are correct | |
| partials/ui/Price | Partial | Unsure if colors are correct | |
| partials/ui/Progress | Complete | | |
| partials/ui/Rating | Complete | | |
| partials/ui/Row | Complete | | |
| partials/ui/SegmentedControl | | | |
| partials/ui/Toast | | | |
| partials/ui/TooltipMenu | | | |
| partials/ui/Tooltip | | | |
| partials/ui/Video | | | |
| Icons | Partial | Don't adapt to color. Look at `macros.html.twig` - it adds a `material-icon-svg` class to all icons  | 21:39 (Goose) |
| | | | |