import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { ContextProvider } from './store';
import LandingPage from './pages/LandingPage'
import NannyPage from './pages/NannyPage';
import SharePage from './pages/SharePage';
import StoryPage from './pages/StoryPage';

function App() {
	return (
		<Router>
			<ContextProvider>
				<Layout>
					<Switch>
						<Route exact path="/" ><LandingPage /></Route>
						<Route path="/nanny" ><NannyPage /></Route>
						<Route path="/shares" ><SharePage /></Route>
						<Route path="/story" ><StoryPage /></Route>
					</Switch>
				</Layout>
			</ContextProvider>
		</Router>
	);
}

export default App;
