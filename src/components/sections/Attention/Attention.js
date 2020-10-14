import React from "react";
import Section from "../Section";

const Attention = ({ id, dark }) => (
  <Section id={id} dark={dark}>
	<h1>
	Vi må desværre meddele, at NADA-cafeen stadig holder lukket på ubestemt tid pga Corona situationen.
	<br/>
		Vi ved at vi er savnet, og ville så gerne have haft mulighed for at starte op.

	<br/>
	<br/>
		Hvis du har behov for NADA henviser vi i stedet til private NADA-udøvere.

	<br/>
		Du kan finde en liste over de registrerede NADA-udøvere her på NADA-Danmarks hjemmeside.
	</h1>
  </Section>
);

export default Attention;
