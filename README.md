# 🔍 react-devtools-detector

> A React hook that detect if DevTools is open.

## Install

You can install `react-devtools-detector` with npm, Yarn, or pnpm.

```bash
npm install react-devtools-detector
yarn add react-devtools-detector
pnpm install react-devtools-detector
```

## Usage

Here's how to use `react-devtools-detector`:

```jsx
import useIsDevtoolsOpen from 'react-devtools-detector';

function App() {
  const isDevtoolsOpen = useIsDevtoolsOpen();

  return (
    <div>{isDevtoolsOpen ? 'DevTools is open' : 'DevTools is closed'}</div>
  );
}
```

You can set the interval to check if DevTools is open:

```jsx
import useIsDevtoolsOpen from 'react-devtools-detector';

function App() {
  const isDevtoolsOpen = useIsDevtoolsOpen(1000);

  return (
    <div>{isDevtoolsOpen ? 'DevTools is open' : 'DevTools is closed'}</div>
  );
}
```

## API

### `useIsDevtoolsOpen(interval?: number): boolean`

Parameters:

- `interval` (optional): The time (in milliseconds) at which the hook should check for the DevTools status. If value is ≤ 0, detection stops. Default is `500ms`.

Returns:

A boolean indicating whether the DevTools is open (`true`) or closed (`false`).

## Note

The detection is based on certain heuristics and may not be 100% accurate. This package utilizes the [devtools-detector](https://github.com/AEPKILL/devtools-detector) package for detecting the status of DevTools.

## Reference

> [devtools-detector](https://github.com/AEPKILL/devtools-detector)
