import React, { useState, useContext } from "react";
import styled from "styled-components";
import * as firebase from "firebase";

// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';

// Internal components
import { AuthContext } from "../../App";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PasswordField from './PasswordField'
import SiginFooter from "./SigninFooter";
import {StyledInput} from "../StyledComponents";

const CenterCard = styled(Card)`
    width: 50%;
    margin: 2% auto;
    text-align: center;
`;

/**
 * Component for both loggin in and joining the application
 * @param props
 * @returns {*}
 * @constructor
 */
const Signin = (props) => {

    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState(""); // only for join

    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    // join or login view
    // if true --> show login view --> else show join view
    const [showLogin, setShowLogin] = useState(true);

    const handleFormJoin = e => {
        e.preventDefault();

        // check that both passwords are the same
        if(password1 !== password2){
            setErrors("Passwords does not match");
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password1)
            .then(res => {
                if (res.user){
                    Auth.setLoggedIn(true);
                    props.history.push('/mainpage');
                }
            })
            .catch(e => {
                setErrors(e.message);
            });
    };
    const handleFormLogin = e => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password1)
            .then(res => {
                if (res.user){
                    Auth.setLoggedIn(true);
                    props.history.push('/mainpage');
                }
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    const handleForm = e => {(showLogin) ? handleFormLogin(e) : handleFormJoin(e)}

    const headerText = () => { return (showLogin) ? 'Login at Watchly' : 'Join us at Watchly';}

    const joinOrLoginText = () => { return (showLogin) ? 'Login' : "Join";}

    return (
        <Container>
            <CenterCard>
                <CardContent>
                    <Typography variant="h4" gutterBottom>{headerText()}</Typography>
                    <form onSubmit={handleForm}>
                        <StyledInput
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            required
                        />
                        {PasswordField(showLogin, password1, setPassword1, password2, setPassword2)}
                        <Button type='submit' variant="contained" color="primary">{joinOrLoginText()}</Button>
                    </form>
                    <Typography variant="h6" gutterBottom>{error}</Typography>
                    {SiginFooter(showLogin, setShowLogin)}
                </CardContent>
            </CenterCard>
        </Container>
    );
};

export default Signin;
