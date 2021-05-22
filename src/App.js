import {LandingPage, SignInPage, SignUpPage} from './pages';
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
				<Route path="/signup">
					<SignUpPage/>
				</Route>
				<Route path="/">
					<LandingPage/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
