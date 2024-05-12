import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/icon-hamburger.svg";

import "../css/Navbar.css";

function Navbar() {
  const[buttonClicked, setButtonClicked] = useState(false);

function handleClick(){
  setButtonClicked(!buttonClicked);
}
  return (
    <div className="nav-container">
      <img src={logo} alt="logo-image" className="logo" />

      <div className={buttonClicked?"nav-links-container":""}>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <img src={menuIcon} alt="hamburger-icon" className="menu-icon" onClick={handleClick}/>
    </div>
  );
}
export default Navbar;
