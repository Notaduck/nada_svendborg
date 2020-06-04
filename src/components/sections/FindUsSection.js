import React from 'react';
import Section from '../Section';
import '../../styles/findus.css'


import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const FindUsSection = ({ id, dark }) => (
  <Section id={id} dark={dark} cl='find' >
    <div className="leaflet_container">
      <Map
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >

      </Map>

    </div>
    {/* <div className='container'>
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
    </div> */}
  </Section>
);

export default FindUsSection;
