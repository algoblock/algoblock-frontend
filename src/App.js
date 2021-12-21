import { createContext, useReducer } from "react";
import {LandingPage, SignInPage, SignUpPage, DashboardPage, EditorPage} from './pages';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import './App.css';

export const Context = createContext();

const initialState = {
  darkMode: localStorage.getItem('darkMode') || false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DARKMODE":
      localStorage.setItem("darkMode", action.payload.darkMode);
      return {
        ...state,
        darkMode: action.payload.darkMode
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
          <Route path="/editor">
            <EditorPage/>
          </Route>
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
