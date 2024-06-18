import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="text_footer">
          <div className="text">
            <h1>
              LET'S BE <span>STYLISH</span>
            </h1>
          </div>
          <div className="image">
            <img
              className="inside_img"
              src="https://images.unsplash.com/photo-1592833578500-1082e18665a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
              alt="fashion"
            ></img>
          </div>
        </div>
        <div className="contact">
          <div className="box">INSTAGRAM</div>
          <div className="box">EMAIL</div>
          <div className="box">FACEBOOK</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
