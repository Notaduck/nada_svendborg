import React from 'react';
// import Normalize from 'react-normalize';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

import WelcomeSection from './components/sections/WelcomeSection';
import ThreatmentSection from './components/sections/ThreatmentSection';
import FactsSection from './components/sections/FactsSection';

function App() {
  return (
    <>
      {/* <Normalize /> */}
      <div className="App">
        <Header />
        <Navbar />
        <WelcomeSection id="Welcome" dark={false} />
        <ThreatmentSection id="Threatment" dark />
        <FactsSection id="Facts" dark={false} />
      </div>
    </>
  );
}

export default App;
