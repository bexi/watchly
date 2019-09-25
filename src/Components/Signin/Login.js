import React, { useState, useContext } from "react";
import * as firebase from "firebase";
import {Link} from "react-router-dom";

import './sign-in.css';
import { AuthContext } from "../../App";

const Login = (props) => {
    const Auth = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const handleForm = e => {
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

    const Header = () => {
        return(
            <div className="card-header">
                <h3>Login To Watchly</h3>
            </div>);
    }

    const Footer = () => {
        return (
            <div className="card-footer">
                <div className="d-flex justify-content-center links">Don't have an account?
                    <Link to="/Join">Join</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container-sigin">
            <div className="d-flex justify-content-center h-100">
                <div className="card-sigin">
                    <Header/>
                    <form onSubmit={e => handleForm(e)}>
                        <div className="input-group form-group signin-input">
                            <input
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                            <input
                                className="form-control"
                                onChange={e => setPassword(e.target.value)}
                                name="password"
                                value={password}
                                type="password"
                                placeholder="password"
                            />
                        </div>
                        <div className="center-wrapper"><button type="submit" className="btn signin-btn">Login</button></div>
                        <span>{error}</span>
                    </form>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Login;