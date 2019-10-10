import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Material UI
import Button from "@material-ui/core/Button";

// Internal components
import {AuthContext} from "./App";
import {Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";

const Header = () => {
    const Auth = useContext(AuthContext);
    const MuiTheme = useTheme();

    const subTitle="  Keep Track of Your Movies";

    // Only show the logout button if the user is logged in
    let logOutButton;
    if(Auth.isLoggedIn) logOutButton = (<Button style={{position:"absolute", right:'5%'}} onClick={() =>
    { Auth.setLoggedIn(false)}}>Log out</Button>);
    else logOutButton = null;

    return (
        <div style={{width:'100%',height:'8%', padding:'1%', backgroundColor: MuiTheme.palette.background.paper}}>
            <Typography variant="h4" component="h4" style={{display:'inline',color:'white'}}>
               Watchly
            </Typography>
            <Typography variant="h6" component="h1" style={{display:'inline',color:'white'}}>
                {subTitle}
            </Typography>
            {logOutButton}
        </div>);
}

export default Header;