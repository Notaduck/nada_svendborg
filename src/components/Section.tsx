import React from 'react';
import '../styles/section.css';

interface props {
  children: Node,
  dark: boolean,
  id: string,
  cl?: string
}

const Section: React.FC<props> = ({ children, dark, id, cl }) => (
  <div className={`section${dark ? ' section-dark' : ''} ${cl}`} >
    <div className="section-content" id={id}>
      {children}
    </div>
  </div>

);

export default Section;
