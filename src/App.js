import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Firebase
import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

// Material UIs
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Internal components
import './App.scss';
import Signin from "./Components/Signin/Signin";
import MainPage from "./Components/MainPage/MainPage";
import Header from "./Header";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

// Init firebase with config
firebase.initializeApp(firebaseConfig);

// App contexts
export const AuthContext = React.createContext(null);
export const AppContext = React.createContext(null);

function App(props) {
    // App theme -- TODO move to separate file
    const base_theme = createMuiTheme({
        palette: {
            type: 'dark', // the text and similar will be white
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#ff4400'
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                main: '#0044ff'
            },
            primaryOpacity: {
                main: 'rgba(#ff4400, 0.2)'
            },
            background: {
                paper: 'rgba(0,0,0,0.5)'
            }
        }
    });
    const theme = responsiveFontSizes(base_theme);

    // Authentication
    const devLogin = true;
    const [isLoggedIn, setLoggedIn] = useState(devLogin);

    // The user's movies
    const [movies, setMovies] = useState([{title: 'Add a movie here', rating: '5'}]);

    // A private route is only accessible if the user is logged in
    const PrivateRoute = ({ component: Component, ...props }) => (
        <Route {...props} render={(props) => (
            isLoggedIn === true
                ? <Component {...props} />
                : props.history.push('/')
        )} />
    )

    return (
         <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            <AppContext.Provider value={{ movies, setMovies}}>
                <div className="App">
                    <CssBaseline>
                        <ThemeProvider theme={theme}>
                        <Header/>
                        <Router>
                          <Route exact path="/" component={(props) => <Signin {...props} />} />
                          <Route exact path="/signin" component={(props) => <Signin {...props} />} />
                          <PrivateRoute path="/mainpage" component={MainPage} />
                        </Router>
                        </ThemeProvider>
                    </CssBaseline>
                </div>
            </AppContext.Provider>
        </AuthContext.Provider>
    );
}
export default App;