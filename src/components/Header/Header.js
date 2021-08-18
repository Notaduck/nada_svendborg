import React from "react";
import "./header.css";

const Header = () => (
  <div className="header_wrapper">
    <img
      className="header_image"
      src={require("../../assets/rendered.jpg")}
      alt="Background"
    />
    <div className="site_title">
      <h1 className="sub_title">
        {" "}
	Vi kan med glæde meddele, at NADA-cafeen åbner op <strong> mandag d. 23/8 kl 16-18</strong>.
      </h1>
      <h1 className="title">NADA Svendborg </h1>
      <h4 className="sub_title"> – certificerede nadaudøvere</h4>
    </div>
  </div>
);

export default Header;
