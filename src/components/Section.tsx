import React from 'react';
import '../styles/section.css';

interface props {
  children: Node,
  dark: boolean,
  id: string
}

const Section: React.FC<props> = ({ children, dark, id }) => (
  <div className={`section${dark ? ' section-dark' : ''}`}>
    <div className="section-content" id={id}>
      {children}
    </div>
  </div>

);

export default Section;
