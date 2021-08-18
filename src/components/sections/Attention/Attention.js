import React from "react";
import Section from "../Section";

const Attention = ({ id, dark }) => (
  <Section id={id} dark={dark}>
	<p style={{ fontSize: "4.5rem" }}>
	Vi kan med glæde meddele, at NADA-cafeen åbner op <strong> mandag d. 23/8 kl 16-18</strong>.

	</p>

	<p style={{ fontSize: "4.5rem" }}>
		Vi glæder os meget til at se jer igen!
	</p>
  </Section>
);

export default Attention;
