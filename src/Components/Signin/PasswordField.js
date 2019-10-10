import React from "react";

import {StyledInput} from "../StyledComponents";

const PasswordField = (showLogin, password1, setPassword1, password2, setPassword2) => {
    if(showLogin){ // login
        return(
            <StyledInput
                value={password1}
                onChange={e => setPassword1(e.target.value)}
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                required
            />
        );
    }else{ // join
        return (
            <div>
                <StyledInput
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    name="password1"
                    type="password"
                    label="Password"
                    variant="outlined"
                    required
                />
                <StyledInput
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    name="password2"
                    type="password"
                    label="Input password again"
                    variant="outlined"
                    required
                />
            </div>
        );
    }
}
export default PasswordField;