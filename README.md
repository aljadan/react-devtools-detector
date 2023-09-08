# 🔍 react-devtools-detector

> A React hook that detect if DevTools is open.

## [Demo](react-devtools-detector.vercel.app)

## 📦 Installation

Choose your preferred package manager:

```bash
npm install react-devtools-detector
# or
yarn add react-devtools-detector
# or
pnpm install react-devtools-detector
```

## 🚀 Usage

Easily integrate the detector into your React application:

```jsx
import useIsDevToolsOpen from 'react-devtools-detector';

function App() {
  const isDevtoolsOpen = useIsDevToolsOpen();

  return (
    <div>{isDevtoolsOpen ? 'DevTools is open' : 'DevTools is closed'}</div>
  );
}
```

For advanced configurations:

```jsx
import useIsDevToolsOpen from 'react-devtools-detector';

function App() {
  const isDevtoolsOpen = useIsDevToolsOpen({
    interval: 1000,
    enabled: process.env.NODE_ENV !== 'development',
  });

  return (
    <div>{isDevtoolsOpen ? 'DevTools is open' : 'DevTools is closed'}</div>
  );
}
```

## 📘 API Reference

### `useIsDevToolsOpen(options?: DevToolsDetectorOptions): boolean`

**Parameters**:

- `options` (optional):
  - `interval`: Interval in milliseconds to check if DevTools is open. Defaults to `500ms`.
  - `enabled`: Flag to enable or disable the detector. Defaults to `true`.

**Returns**:

- Boolean value indicating the status of DevTools (`true` if open, `false` otherwise).

## ⚠️ Important Note

It's highly recommended to disable detection during development (`enabled: false`). The detection process clears the entire console, which could obscure valuable error messages or logs.

## 🔧 Under the Hood

The hook relies on heuristic methods to determine the status of DevTools, ensuring a high but not absolute accuracy. The core detection functionality is powered by [devtools-detector](https://github.com/AEPKILL/devtools-detector).

## Reference

> [devtools-detector](https://github.com/AEPKILL/devtools-detector)
