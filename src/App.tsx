import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage'

function App() {
	return (
		<Router>
			<LandingPage />
		</Router>
	);
}

export default App;
