import React from 'react';
import '../styles/header.css';

const Header = () => (
  <div>
    <img className="header_image" src={require('../assets/header.jpg')} alt="Background" />
    <div className="site_title">
      <h1 className="title">NADA Svendborg</h1>
      <h4 className="sub_title"> – certificerede nadaudøvere</h4>
    </div>
  </div>
);

export default Header;
