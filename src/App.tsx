import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header/Header";
import AttentionSection from "./components/sections/Attention/Attention";
import WelcomeSection from "./components/sections/WelcomeSection/WelcomeSection";
import TreatmentSection from "./components/sections/TreatmentSection/TreatmentSection";
import FactsSection from "./components/sections/FactsSection/FactsSection";
import FindUsSection from "./components/sections/FindUsSection/FindUsSection";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

const App = () => {
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setsideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    setsideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backDropClickHandler} />;
  }

  const sections = [
    {
      id: "attention",
      title: "Corona Info",
      tag: <AttentionSection id="attention" dark={true} key="attention" />,
    },
    {
      id: "welcome",
      title: "Velkommen",
      tag: <WelcomeSection id="welcome" dark={false} key="welcome" />,
    },
    {
      id: "treatment",
      title: "Behandlingen",
      tag: <TreatmentSection id="treatment" dark key="treatment" />,
    },
    {
      id: "facts",
      title: "Facts",
      tag: <FactsSection id="facts" dark={false} key="facts" />,
    },
    {
      id: "findUs",
      title: "Find os",
      tag: <FindUsSection id="findUs" dark key="findus" />,
    },
  ];

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NADA Svendborg</title>
          <link rel="canonical" href="https://nada-svendborg.dk" />
        </Helmet>
        <Header />
        <Toolbar
          drawerClickHandler={drawerToggleClickHandler}
          sections={sections}
        />
        <SideDrawer visible={sideDrawerOpen} sections={sections} />
        {backdrop}
        {sections.map((section) => section.tag)}
      </div>
    </>
  );
};

export default App;
