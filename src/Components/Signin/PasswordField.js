import React from "react";

import TextField from "@material-ui/core/TextField";

const PasswordField = (showLogin, password1, setPassword1, password2, setPassword2) => {
    if(showLogin){ // login
        return(
            <TextField
                style={ {width: '100%', marginBottom: 8}}
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
                <TextField
                    style={ {width: '100%', marginBottom: 8}}
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    name="password1"
                    type="password"
                    label="Password"
                    variant="outlined"
                    required
                />
                <TextField
                    style={ {width: '100%', marginBottom: 8}}
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