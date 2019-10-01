import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'

import * as firebase from "firebase";

// Material UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Internal components
import { AuthContext } from "../../App";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/**
 * Component for both loggin in and joining the application
 * @param props
 * @returns {*}
 * @constructor
 */
const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    // join or login view
    // if true --> show login view --> else show join view
    const [showLogin, setShowLogin] = useState(true);

    const Auth = useContext(AuthContext);

    const handleFormJoin = e => {
        console.log("in login handler");
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
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
        console.log("in join handler");
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
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

    const headerText = () => {
        return (showLogin) ? 'Login at Watchly' : 'Join us at Watchly';
    }
    const buttonText = () => {
        if(showLogin) return 'Login';
        else return 'Join';
    }

    const Footer = () => {
        let text = (showLogin) ? "Don't have an account?" : 'Already have an account?';
        let linkText = (showLogin) ? 'Join' : "Login";

        return (
          <div className="card-footer">
              <div className="d-flex justify-content-center links">{text}
                  <Link onClick={(e) => {setShowLogin(!showLogin)}}>{linkText}</Link>
              </div>
          </div>
        );
    }

    return (
        <Container>
            <Card style={{width: '50%', margin:'0 auto'}}>
                <CardContent style={{textAlign: 'center'}}>
                    <Typography variant="h4" gutterBottom>{headerText()}</Typography>
                    <form onSubmit={handleForm}>
                        <TextField
                            style={ {width: '100%', marginBottom: 8} }
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            color="secondary"
                            required
                        />
                        <TextField
                            style={ {width: '100%', marginBottom: 8}}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            required
                        />
                        <Button type='submit' color="primary">{buttonText()}</Button>
                    </form>
                    <Typography variant="h6" gutterBottom>{error}</Typography>
                    <Footer/>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Signin;
