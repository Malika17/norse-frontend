import React from "react";
import "./Categories.scss";
import catimg1 from "../images/cat4.jpg";
import catimg2 from "../images/cat2.jpg";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <h1>S</h1>
        </div>
        <div className="row">
          <p>
            COMPLEMENTING OUR EXISTING RANGE EFFORTLESSLY WITH DISTINCTIVE
            DETAILS LIKE SPECKLED YARN, ALLOVER PRINTS, WAVE DYE NYLON, AND
            CABLE KNIT PATTERNS.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={catimg2} alt="Distinctive Details Collection"></img>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <p>
                AMIDST THE BREATHTAKING EXPANSE OF NATURE AND THE SERENE SWEDISH
                LANDSCAPE, WE INTRODUCE OUR WAVE DYE NYLON COLLECTION OF
                GARMENT-DYED OUTERWEAR AND APPAREL.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h1>4</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <h1>2</h1>
          <img src={catimg1} alt="Wave Dye Nylon Collection"></img>
        </div>
      </div>
    </div>
  );
};

export default Categories;
