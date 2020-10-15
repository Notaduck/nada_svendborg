import React from "react";
import Section from "../Section";

const Attention = ({ id, dark }) => (
  <Section id={id} dark={dark}>
	<p style={{ fontSize: "2rem" }}>
	Vi må desværre meddele, at NADA-cafeen stadig holder lukket på ubestemt tid pga. Corona situationen.
		Vi ved at vi er savnet, og ville så gerne have haft mulighed for at starte op.
		Hvis du har behov for NADA henviser vi i stedet til private NADA-udøvere.
	Du kan finde en liste over de registrerede NADA-udøvere på <a style={{ color: "inherit" }} href="https://nada-danmark.dk/?page_id=435">NADA-Danmarks hjemmeside</a>.
	

	</p>
  </Section>
);

export default Attention;
