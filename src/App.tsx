import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import WelcomeSection from './components/sections/WelcomeSection';
import ThreatmentSection from './components/sections/ThreatmentSection';
// import FactsSection from './components/sections/FactsSection';
import FactsSection from './components/sections/FactsSection'
import FindUsSection from './components/sections/FindUsSection'

function App() {
  return (
    <>
      <div >
        <Header />
        <Navbar />
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
