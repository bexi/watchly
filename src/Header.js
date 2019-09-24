import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <ul className="nav">
            <li >
                <Link to='/login'>Login</Link>
                <Link to='/join'>Join</Link>
                <Link to='/mainpage'>MainPage</Link>
            </li>
    </ul>
);

export default Header;