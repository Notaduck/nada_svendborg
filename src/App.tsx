import React, { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import WelcomeSection from './components/sections/WelcomeSection';
import TreatmentSection from './components/sections/TreatmentSection';
import FactsSection from './components/sections/FactsSection'
import FindUsSection from './components/sections/FindUsSection'

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

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
      id: "welcome",
      title: "Velkommen",
      tag: <WelcomeSection id="welcome" dark={false} key='welcome' />
    },
    {
      id: "treatment",
      title: "Behandlingen",
      tag: <TreatmentSection id="treatment" dark key='treatment' />

    },
    {
      id: "facts",
      title: "Facts",
      tag: <FactsSection id="facts" dark={false} key='facts' />
    },
    {
      id: "findUs",
      title: "Find os",
      tag: <FindUsSection id="findUs" dark key='findus' />
    }
  ]

  return (
    <>
      <div >
        <Header />
        <Toolbar drawerClickHandler={drawerToggleClickHandler} sections={sections} />
        <SideDrawer visible={sideDrawerOpen} sections={sections} />
        {backdrop}
        {sections.map(section => section.tag)}
        <Footer />
      </div>
    </>
  );
}

export default App;
