import React from 'react';
import Section from '../Section';
import '../../styles/findus.css'
import Map from '../Map/Map'

const FindUsSection = ({ id, dark }) => (
  <Section id={id} dark={dark} cl='find' >
    <div className='container'>
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
      <div>
        <Map />
      </div>
    </div>
  </Section>
);

export default FindUsSection;
