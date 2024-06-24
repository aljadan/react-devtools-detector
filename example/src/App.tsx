import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import useIsDevToolsOpen from '../../.';
import './App.css';

function App() {
  const isDevToolsOpen = useIsDevToolsOpen();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Is DevTools open?</h2>
        <h3>{isDevToolsOpen ? 'Yes' : 'No'}</h3>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
