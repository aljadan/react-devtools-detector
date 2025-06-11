import { useState } from 'react'
import useIsDevToolsOpen from '../../src'
import './App.css'

function App() {
	const [enabled, setEnabled] = useState(true)
	const isDevToolsOpen = useIsDevToolsOpen({
		enabled,
	})

	return (
		<>
			<h1>DevTools is {isDevToolsOpen ? 'open' : 'closed'}</h1>
			<button onClick={() => setEnabled(!enabled)}>
				{enabled ? 'Disable' : 'Enable'}
			</button>
		</>
	)
}

export default App
