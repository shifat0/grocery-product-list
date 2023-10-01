import React from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <div className="nav">
      <div className="navContainer">
        <h1 className="logo">Grocery Store</h1>
        <div className="navItems">
          <div className="search">
            <BiSearch className="searchIcon" />
            <input type="text" className="searchInput" placeholder="Search" />
          </div>
          <span>Home</span>
          <span>About</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
