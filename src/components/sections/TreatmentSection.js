import React from "react";
import Section from "../Section";
import "../../styles/ThreatmentSection.css";

const ThreatmentSection = ({ id, dark }) => (
  <Section id={id} dark={dark}>
    <h1>Selve behandlingen</h1>
    <div className="container">
      <div className="content">
        <p>
          Tilbuddet er åbent 2 gange om ugen. Åbningstid er mandag og torsdag
          kl. 16-18, således man kan få sat NADA-nåle i kl. 16-17:15 og
          efterfølgende sidde med nålene i 45 min.
          <br />
          <br />
          Der er lukket på helligdage, mellem jul og nytår samt i juli måned.
          <br />
          <br />
          Der kræves ikke tilmelding. Der gives behandling i den rækkefølge man
          møder op. Man registreres med fornavn på en liste og får et nummer.
          Behandleren kalder ind når tiden er gået, hvorefter nålene tages ud.
          <br />
          <br />
          Der er i alt ca. 20 NADA-behandlere i foreningen, så man vil møde
          forskellige behandlere fra gang til gang. Der er altid 2 behandlere
          til stede, når tilbuddet er åbent.
          <br />
          <br />
          Man sidder, eller ligger på yoga-måtter med et tæppe over, i et fælles
          lokale. Der er kun få polstrede stole. Vi har et vist antal
          yoga-måtter og tæpper til udlån.
          <br />
          <br />
          Prisen for behandlingen dækker udgifter til NADA-nåle m.v. Der betales
          kontant eller med MobilePay.
          <br />
          <br />
          <br />
          <p>
            {" "}
            Du kan læse mere om NADA{" "}
            <a
              href={process.env.PUBLIC_URL + "/nada_pjece.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              her
            </a>{" "}
          </p>
        </p>
      </div>
      <div className="threatment_img">
        <img src={require("../../assets/threatment2.jpg")} alt="" />
      </div>
    </div>
  </Section>
);

export default ThreatmentSection;
