import React from 'react';
import './header.css';

const Header = () => (
  <div className="header_wrapper">
    <img className="header_image" src={require('../../assets/rendered.jpg')} alt="Background" />
    <div className="site_title">
      <h1 className="title">NADA Svendborg </h1>
      <h4 className="sub_title"> – certificerede nadaudøvere</h4>
      <h4 className="sub_title"> – dette er ikke en den officielle side men en demo side</h4>
    </div>
  </div>
);

export default Header;
