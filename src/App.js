import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

import './App.css';
import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

import Login from "./Components/Signin/Login";
import Join from "./Components/Signin/Join";
import MainPage from "./Components/MainPage/MainPage";
import NewMovie from "./Components/NewMovie/NewMovie";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);
export const AppContext = React.createContext(null);

function App(props) {
    // Authentication
    const devLogin = true;
    const [isLoggedIn, setLoggedIn] = useState(devLogin);

    // Movies
    const [movies, setMovies] = useState([{title: 'Add a movie here', rating: '5'}]);

    const PrivateRoute = ({ component: Component, ...props }) => (
        <Route {...props} render={(props) => (
            isLoggedIn === true
                ? <Component {...props} />
                : props.history.push('/login')
        )} />
    )

    let logOutButton;
    if(isLoggedIn) logOutButton = <Header/>
    else logOutButton = null;

  return (
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        Is logged in? {JSON.stringify(isLoggedIn)}
        <AppContext.Provider value={{ movies, setMovies}}>
            <div className="App">
                {logOutButton}
                <Router>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/login" component={(props) => <Login {...props} />} />
                  <Route path="/join" component={Join} />
                  <PrivateRoute path="/mainpage" component={MainPage} />
                  <PrivateRoute path="/newmovie" component={NewMovie} />
                </Router>
            </div>
        </AppContext.Provider>
      </AuthContext.Provider>
  );
}
export default App;