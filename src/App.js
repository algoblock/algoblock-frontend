import React from 'react';
import { createContext, useReducer } from "react";
import {LandingPage, SignInPage, SignUpPage, DashboardPage, EditorPage, ProjectPage} from './pages';
import UserProvider from './providers/UserProvider';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from './utilities/_export.module.scss';

import './App.css';

export const Context = createContext();

const initialState = {
  darkMode: localStorage.getItem('darkMode') || true,
};

console.log(colors.primary);

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

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    text: {
      primary: colors.dark,
    }
  },
});

console.log(theme);

const darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    text: {
      primary: colors.white,
    }
  },
});

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Context.Provider
			value={{
	        	state,
	        	dispatch
	      	}}
		>
      <UserProvider>
        <ThemeProvider theme={state.darkMode ? darkTheme : theme}>
          <Router>
            <Switch>
              <Route path="/editor">
                <EditorPage/>
              </Route>
              <Route path="/dashboard">
                <DashboardPage/>
              </Route>
              <Route path="/projects/:id">
                <ProjectPage/>
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
        </ThemeProvider>
      </UserProvider>
		</Context.Provider>
	);
}

export default App;
