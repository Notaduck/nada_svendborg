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
      <h1 className="title">NADA Svendborg </h1>
      <h4 className="sub_title"> – certificerede nadaudøvere</h4>
  <h4 className="sub_title"> NADA-cafeen holder sommerferie fra 28/6 - 31/7. Vi åbner op igen 1/8. God sommer til alle </h4>
    </div>
  </div>
);

export default Header;
