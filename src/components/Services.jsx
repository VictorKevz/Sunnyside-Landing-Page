import React from "react";
import "./css/Services.css";

function services() {
  return (
    <div className="services-container">
      <div className="services graphic-designing">
        <div className="text-container graphic-designing">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="services photography">
        <div className="text-container photography">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}
export default services;
