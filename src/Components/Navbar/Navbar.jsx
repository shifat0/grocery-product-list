import React, { useState } from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="navWrapper">
          <h1 className="logo">Grocery Store</h1>
          <div className={`${showNav ? "navItems showNav" : "navItems"}`}>
            <AiFillCloseCircle
              className="navBtn navBtnClose"
              onClick={() => setShowNav(!showNav)}
            />
            <div className="search">
              <BiSearch className="searchIcon" />
              <input type="text" className="searchInput" placeholder="Search" />
            </div>
            <span>Home</span>
            <span>About</span>
            <span>Contact Us</span>
          </div>
        </div>
        <FaBars className="navBtn" onClick={() => setShowNav(!showNav)} />
      </div>
    </div>
  );
}

export default Navbar;
