import React, { useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import WelcomeSection from './components/sections/WelcomeSection';
import ThreatmentSection from './components/sections/ThreatmentSection';
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

  return (
    <>
      <div >
        <Header />
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer visible={sideDrawerOpen} />

        {backdrop}
        <WelcomeSection id="Welcome" dark={false} />
        <ThreatmentSection id="Threatment" dark />
        <FactsSection id="Facts" dark={false} />
        <FindUsSection id="FindUs" dark />
        <Footer />
      </div>
    </>
  );
}

export default App;
