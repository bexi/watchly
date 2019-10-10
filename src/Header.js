import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Material UI
import Button from "@material-ui/core/Button";

// Internal components
import {AuthContext} from "./App";
import {Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import {PaperDiv} from "./Components/StyledComponents";

const LogoutButton = styled(Button)`
    position:absolute !important;
    right: 5%;
`;
const HeaderContainer = styled(PaperDiv)`
    height: 8%;
    padding: 1%;
`;

const Header = () => {
    const Auth = useContext(AuthContext);
    const MuiTheme = useTheme();

    const title = "Watchly";
    const subTitle=" Keep Track of Your Movies";

    // Only show the logout button if the user is logged in
    let logOutButton;
    if(Auth.isLoggedIn) logOutButton = (<LogoutButton onClick={() =>
    { Auth.setLoggedIn(false)}}>Log out</LogoutButton>);
    else logOutButton = null;

    return (
        <HeaderContainer theme={MuiTheme}>
            <Typography variant="h4" component="h4" style={{display:'inline',color:'white'}}>
                {title}
            </Typography>
            <Typography variant="h6" component="h1" style={{display:'inline',color:'white'}}>
                {subTitle}
            </Typography>
            {logOutButton}
        </HeaderContainer>);
}

export default Header;