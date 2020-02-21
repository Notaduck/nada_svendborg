import React from 'react';
import Section from '../Section';
import '../../styles/findus.css'

const FindUsSection = ({ id, dark }) => (
  <Section id={id} dark={dark}>
    <div className={`section${dark ? ' section-dark' : ''}`}>
      <div className="section-content" id={id}>
        <div className="container">
          <div className="contact_info">
            <p>
              NADA Svendborg
              <br />
              Frivillighuset, 2. sal,
              <br />
              Havnegade 3, 5700 Svendborg
              <br />
              mail: nadasvendborg@gmail.com
            </p>
          </div>
          <div className="map">
            <h1> Map goes here</h1>
            {/* <Map /> */}
          </div>
        </div>
      </div>
    </div>

  </Section>
);

export default FindUsSection;
