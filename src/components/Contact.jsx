import React from "react";
import "./css/Contact.css";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

function Contact() {
  return (
    <div className="contact-wrapper">
      <img src={logo} alt="logo-sunnyside" />
      <div className="contact-list">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </div>
      <div className="social-links">
        <img src={facebook} alt="facebook-icon" />
        <img src={instagram} alt="instagram-icon" />
        <img src={twitter} alt="twitter-icon" />
        <img src={pinterest} alt="pinterest-icon" />
      </div>
    </div>
  );
}
export default Contact;
