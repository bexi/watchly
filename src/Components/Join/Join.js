import React, { useState, useContext } from "react";
import * as firebase from "firebase";
import { Link } from 'react-router-dom'

import { AuthContext } from "../../App";

import './Join.css';

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);

    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    const Header = () => {
        return(
            <div className="card-header">
                <h3>Join Watchly</h3>
            </div>);
    }

    const Footer = () => {
        return (
          <div className="card-footer">
              <div className="d-flex justify-content-center links">Already have an account?
                  <Link to="/Login">Login</Link>
              </div>
          </div>
        );
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <Header/>
                    <form onSubmit={e => handleForm(e)}>
                        <div className="input-group form-group">
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
                        <div className="form-group">
                        <button type="submit" className="float-right form_btn">Join</button>
                        </div>
                        <span>{error}</span>
                    </form>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Join;
