import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "./App";


const Header = () => {
    const Auth = useContext(AuthContext);
    return (
        <ul className="nav">
            <button className="btn" style={{'background-color': 'white'}} onClick={() =>
            { Auth.setLoggedIn(false)}}>Log out
            </button>
        </ul>);
}

export default Header;

/**
 *
 <li >
 <Link to='/login'>Login</Link>
 <Link to='/join'>Join</Link>
 <Link to='/mainpage'>MainPage</Link>
 </li>
 */