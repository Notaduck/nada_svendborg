import React from "react";
import Section from "../Section";
import "./FindUsSection.css";

const FindUsSection = ({ id, dark }) => {
  const mail = "nadasvendborg@gmail.com";

  return (
    <Section id={id} dark={dark} cl="find">
      <div className="contact_info">
        <p>
          NADA Svendborg
          <br />
          Frivillighuset, 2. sal,
          <br />
          Havnegade 3, 5700 Svendborg
          <br />
          Mail: <a href={"mailto:" + mail}>{mail}</a>
        </p>
      </div>
    </Section>
  );
};

export default FindUsSection;
