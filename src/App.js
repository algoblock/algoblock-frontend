import { createContext, useReducer } from "react";
import {LandingPage, SignInPage, SignUpPage, DashboardPage} from './pages';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import './App.css';

export const Context = createContext();

const initialState = {
  darkmode: localStorage.getItem('darkmode') || false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DARKMODE":
      localStorage.setItem("darkmode", action.payload.darkmode);
      return {
        ...state,
        darkmode: action.payload.darkmode
      };
    default:
      return state;
  }
};


function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Context.Provider
			value={{
	        	state,
	        	dispatch
	      	}}
		>
			<Router>
				
				<Switch>
					<Route path="/dashboard">
						<DashboardPage/>
					</Route>
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
		</Context.Provider>
	);
}

export default App;
