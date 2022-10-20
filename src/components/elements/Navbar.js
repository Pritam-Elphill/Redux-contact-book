import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <Link className="btn btn-light ms-auto" to="/contact/add">
          Create Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
