import React from 'react';
import Section from '../Section';
import '../../styles/ThreatmentSection.css';

const ThreatmentSection = ({ id, dark }) => (
  <Section id={id} dark={dark}>
    <h1>Selve behandlingen</h1>
    <div className='container'>
      <p>
        Tilbuddet er åbent 2 gange om ugen. Åbningstid er mandag og torsdag kl. 16-18, således man kan få sat NADA-nåle i kl. 16-17:15 og efterfølgende sidde med nålene i 45 min.
      <br />
        <br />
        Der er lukket på helligdage, mellem jul og nytår samt i juli måned.
      <br />
        <br />
        Der kræves ikke tilmelding. Der gives behandling i den rækkefølge man møder op. Man skriver sig på en liste og får et nummer, som skrives på en oversigt, så det er tydeligt, hvornår nålene skal tages ud på den enkelte.
      <br />
        <br />
        Der er i alt ca. 15 NADA-behandlere i foreningen, så man vil møde forskellige behandlere fra gang til gang. Der er altid 2 behandlere til stede, når tilbuddet er åbent.
      <br />
        <br />
        Pris er 25 kr. pr. gang, som dækker udgifter til NADA-nåle m.v. Der betales kontant eller med MobilePay.
      </p>
      <img className='threatment_img' src={require('../../assets/threatment2.jpg')} />
    </div>
  </Section>
);

export default ThreatmentSection;
