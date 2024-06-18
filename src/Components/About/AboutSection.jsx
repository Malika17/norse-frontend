import React from "react";
import aboutimg1 from "../images/about1.jpg";
import aboutimg2 from "../images/about2.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div id="about-section" className="about">
      <h1 className="aboutHead">ABOUT NORSE</h1>
      <div className="leftAbout">
        <img
          className="image"
          src={aboutimg1}
          alt="Norse brand representation"
        ></img>
      </div>
      <div className="rightAbout">
        <div className="topAbout">
          <img src={aboutimg2} alt="Norse collection"></img>
        </div>
        <div className="bottomAbout">
          <p>
            NORSE, the high-end luxury brand, is the epitome of modernity and
            sophistication, its unconditional dedication to design combines
            elegance and purity with innovative materials and exceptional
            craftsmanship. The refinement of cuts and the perfection of details
            give form to an approach to fashion defined by deliberation, rigour,
            and high quality. Launched in 1968 by L. Sander, the fashion house
            presented its first women's collection in 1973. The clean-lined
            designs signaled luxury clothes for a new generation of
            businesswomen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
