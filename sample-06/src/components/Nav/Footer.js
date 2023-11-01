import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/timer">Timer</Link>
                </li>
            </ul>
        </nav>
    </footer>
);

export default Footer;