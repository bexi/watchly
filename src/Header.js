import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Material UI
import Button from "@material-ui/core/Button";

// Internal components
import {AuthContext} from "./App";

const Header = () => {
    const Auth = useContext(AuthContext);

    return (
        <ul className="nav">
            <Button onClick={() =>
            { Auth.setLoggedIn(false)}}>Log out</Button>
        </ul>);
}

export default Header;

//             <button className="btn" style={{'background-color': 'white'}} onClick={() =>
//             { Auth.setLoggedIn(false)}}>Log out
//             </button>