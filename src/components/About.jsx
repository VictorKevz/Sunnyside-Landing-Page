
import React from "react";
import "./css/About.css";


function About() {
  return (
    <>
      <div className="about-container">
        <div className="about transform-img">
        </div>
        <div className="about transform-text">
          <h2>Transform your<br/> brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a>LEARN MORE</a>
          <div className="tube yellow"></div>
        </div>
        <div className="about stand-out-img">
        </div>
        <div className="about stand-out-text">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital spaces.
          </p>
          <a>LEARN MORE</a>
          <div className="tube red"></div>
        </div>
      </div>
    </>
  );
}
export default About;
