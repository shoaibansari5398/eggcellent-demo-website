import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toggle }) {
  return (
    <div>
      <div className="navbar flex justify-between p-4 ">
        <div className="nav--start">
          <Link to="/">EGG</Link>
        </div>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="nav--end md:flex hidden">
          <Link to="/" className="ml-4">
            Home
          </Link>
          <Link to="menu" className="ml-4">
            Menu
          </Link>
          <Link to="about" className="ml-4">
            About
          </Link>
          <Link to="contact" className="ml-4">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
