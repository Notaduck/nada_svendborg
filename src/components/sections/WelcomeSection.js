import React from 'react';
import Section from '../Section';

const Welcome = ({ id, dark }) => (
  <Section id={id} dark={dark}>

    <h1>Velkommen til NADA Svendborg</h1>
    <p>Certificerede NADA-udøvere – et tilbud om NADA-behandling i Svendborg.</p>
    <br />
    <p>
      NADA Svendborg er en frivillig forening, hvis formål er at give unge og voksne i Svendborg
      Kommune mulighed for at få kendskab til, afprøve og modtage NADA-behandling.
      Vi tilbyder Nada til unge over 15 år. Er man 15-18 år, tilbyder vi Nada ifølge
      med en forælder.
      Vi ønsker at NADA bliver tilgængeligt for flest mulige, så man får mulighed for at bruge
      NADA som en hjælp til selvhjælp med henblik på at få ro i kroppen,
      sove bedre og reducere stress og angst.
    </p>
    <br />
    <p>
      Har du brug for NADA udover vores åbningstider,
      har NADA-Danmark en hjemmeside med oversigt over
      <u>NADA-udøvere i vores område</u>
      {' '}
      (kig under Svendborg).
    </p>
    <br />
    <p>
      Ved stort fremmøde kan vi i enkelte tilfælde, være nødsaget til at afvise,
      dem som vi ikke kan nå inden for åbningstiden.
    </p>
    <p>
      Åbningstider:
      {' '}
      <br />
      Mandag og torsdag fra 16 til 18
      <br />
      En behandling tager cirka 45 minutter.
      {' '}
      <br />
      OBS! Sidste nåle isættes kl. 17.15!
      {' '}
      <br />
      Frivillighuset, 2.sal, Havnegade 3, 5700 Svendborg
      {' '}
      <br />
      Pris: 25 kr. pr. behandling
      {' '}
      <br />
    </p>
    <br />
    <p> Klippekort til 10 gange 200kr. </p>
  </Section>
);

export default Welcome;
