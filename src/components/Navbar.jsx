import React from "react";

const Navbar = ({ brand }) => {
    return (
        <nav className="navbar bg-info">
            <div className="container">
                <a className="navbar-brand text-uppercase text-light" href='/'>{brand}</a>
            </div>
        </nav>
    );
};

export default Navbar;