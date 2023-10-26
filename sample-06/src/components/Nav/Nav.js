import React from "react";

import "./nav.css"

const Nav = ({ list, className, onNavClick }) => {
    return (
        <nav className={`${className} _card`}>
            <h2 className="_center">Components</h2>
            <ul className="nav-list">
                {
                    list.map(item =>
                        <li key={item.id}>
                            <button
                                value={item.id}
                                type="button"
                                onClick={onNavClick}>
                                {item.name}
                            </button>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;