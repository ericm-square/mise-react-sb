# mise-react-sb

This is a React implementation of Mise.
https://github.com/squareup/mise-theme

## View
To view the current progress, go here:
https://ericm-square.github.io/mise-react-sb/storybook-static


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
