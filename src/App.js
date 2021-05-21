import {LandingPage, SignInPage} from './pages';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import './App.css';

function App() {
	return (
		<Router>
			
			<Switch>
				<Route path="/login">
					<SignInPage/>
				</Route>
				<Route path="/">
					<LandingPage/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
