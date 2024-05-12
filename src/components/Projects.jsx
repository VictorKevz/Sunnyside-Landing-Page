import React from "react";
import "./css/Projects.css";
import emilyPic from "../assets/images/image-emily.jpg";
import thomasPic from "../assets/images/image-thomas.jpg";
import jenniePic from "../assets/images/image-jennie.jpg";

import bottles from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import orange from "../assets/images/desktop/image-gallery-orange.jpg"
import cone from "../assets/images/desktop/image-gallery-cone.jpg"
import cubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg"


function Projects() {
  return (
    <div className="wrapper-projects-container">
      <h4>CLIENT TESTIMONIALS</h4>

      <div className="testimonial-container">
        <div className="testimonial emily">
          <img src={emilyPic} alt="emily-profile-picture" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h5>
            Emily R. <span>Marketing Director</span>
          </h5>
        </div>
        <div className="testimonial thomas">
          <img src={thomasPic} alt="Thomas-profile-picture" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>

          <h5>
            Thomas S. <span>Chief Operating Officer</span>
          </h5>
        </div>
        <div className="testimonial jennie">
          <img src={jenniePic} alt="Jennie-profile-picture" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>

          <h5>
            Jennie F. <span>Business Owner</span>
          </h5>
        </div>
      </div>
      <div className="projects-container">
      <img src={bottles} alt="bottles"/>
      <img src={orange} alt="orange"/>
      <img src={cone} alt="cone"/>
      <img src={cubes} alt="sugarcubes"/>
      </div>
    </div>
  );
}
export default Projects;
