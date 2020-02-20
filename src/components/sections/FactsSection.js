import React from 'react';
import Section from '../Section';

const FactsSection = ({ id, dark }) => (
  <Section id={id} dark={dark}>
    <h1>Facts om NADA Svendborg</h1>
    <p className="qa">
      <strong>Q:</strong>
      {' '}
      Kan man bestille tid?
      <br />
      <strong>A:</strong>
      {' '}
      Nej man møder bare op og tager et nummer i køen. Vi sætter nåle i kl. 16-17:15.
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Kører I ud?
      <br />
      <strong>A:</strong>
      {' '}
      Nej – Det foregår i Frivillighuset i Svendborg
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Sætter i Nada ørekugler i?
      <br />
      <strong>A:</strong>
      {' '}
      Nej, vi sætter kun nåle i som beskrevet under behandlingen
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Jeg kan ikke komme i jeres åbningstid, men vil gerne prøve Nada. Hvad gør jeg?
      <br />
      <strong>A:</strong>
      {' '}
      Du kan prøve at kontakte en Nada-udøver i Svendborgområdet. Kig på Nada-Danmarks hjemmeside.
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Kan man gå før tid og selv tage nålene ud?
      <br />
      <strong>A:</strong>
      {' '}
      Nej! NADA understøtter, at man sidder roligt og ikke lader sig forstyrre. Vi anbefaler man sidder med nålene i 45 min., da der er dokumenteret effekt for at dette tidsrum er hensigtsmæssigt, så man får kontakt med sit eget beroligende system.
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Må man komme hvis man ikke bor i Svendborg?
      <br />
      <strong>A:</strong>
      {' '}
      NADA Svendborg er i princippet målrettet borgere i det sydfynske. Vi spørger ikke hvor du kommer fra.
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Hjælper Nada mod hovedpine?
      <br />
      <strong>A:</strong>
      {' '}
      Det er der ingen garanti for, men generelt styrkes dit velvære. Flere personer fortæller, at når hovedpinen har sammenhæng med stress og spændinger, så oplever de at NADA hjælper dem.
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Hjælper det mod angst?
      <br />
      <strong>A:</strong>
      {' '}
      Nada er angst- og uronedsættende, men kan ikke stå alene. Det supplerer andre former for angstbehandling, og mange beskriver at de oplever at NADA giver dem den ro indeni, så de kan arbejde mere målrettet med behandling af deres angst.
      <br />
      <br />
      <strong>Q:</strong>
      {' '}
      Har I erfaring med behandling af børn?
      <br />
      <strong>A:</strong>
      {' '}
      Der er gode erfaringer med NADA til børn med ADHD, søvnproblemer, angst og uro. Vi tilbyder NADA til unge mellem 15-18 år ifølge med en forælder. Er dit barn under 15 år, anbefaler vi et forløb, hvor I kan følge tættere op på behandlingen end vi kan i en frivillig forening.
      <br />
      <br />
    </p>

  </Section>
);

export default FactsSection;
