import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">
                    <Btn text="Homepage" classes="header-item" />
                </Link>
                <Link to="/games">
                    <Btn text="Games" classes="header-item" />
                </Link>
            </div>
            <div className="header-right">
                <Link to="/manager">
                    <Btn text="Manage" classes="header-item" />
                </Link>
                <Btn text="Cart" classes="header-item" />
            </div>
        </div>
    );
};

export default Header;
