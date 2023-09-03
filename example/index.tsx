import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useIsDevtoolsOpen from '../.';

const App = () => {
  const isDevtoolsOpen = useIsDevtoolsOpen();
  return (
    <div>{isDevtoolsOpen ? 'Devtools is open' : 'Devtools is closed'}</div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
