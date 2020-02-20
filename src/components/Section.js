import React from 'react';
import '../styles/section.css';

const Section = ({ children, dark, id }) => (
  <div className={`section${dark ? ' section-dark' : ''}`}>
    <div className="section-content" id={id}>
      {children}
    </div>
  </div>

);

export default Section;
