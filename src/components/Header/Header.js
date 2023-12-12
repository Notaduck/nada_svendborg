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
          <h4 className="sub_title"> Da frivillighuset flytter matrikel, holder NADA-cafeen lukket fra og med 15/1 - 31/1. Herefter starter vi op i de fantastiske nye lokaler i Frivillighuset Kvægtorvet, på Frederiksgade nr 8 , Svendborg (tidligere den ene del af FremtidsFabrikken)	For at fejre dette giver vi i februar måned GRATIS NADA til alle.      </h2>
 </h4>
    </div>
  </div>
);

export default Header;
