import React from "react";
import { Link } from "react-router-dom";
import VideoBelajar from "../../assets/VideoBelajar.png";

const NavbarAuth = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={VideoBelajar} alt="Logo" width="200" height="50" className="d-inline-block align-text-top" />
                </Link>
            </div>
        </nav>
    );
};

export default NavbarAuth;
