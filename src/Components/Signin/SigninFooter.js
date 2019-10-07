import React from "react";

// Material UI
import {useTheme} from "@material-ui/styles";

// Internal components
import StyledLink from '../StyledLink'

const SigninFooter = (showLogin, setShowLogin) => {
    const MuiTheme = useTheme();

    let text = (showLogin) ? "Don't have an account? " : 'Already have an account? ';
    let linkText = (showLogin) ? 'Join' : "Login";

    return (
        <div >
            {text}
            <StyledLink theme={MuiTheme} onClick={(e) => {setShowLogin(!showLogin)}}>{linkText}</StyledLink>
        </div>
    );
}

export default SigninFooter;