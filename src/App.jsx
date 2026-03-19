import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import WeAre from './Components/WeAre';
import Services from './Components/Services';
import FirstAid from './Components/FirstAid';
import History from './Components/History';
import HistoryPage from './Pages/HistoryPage';
import LegalEstablishment from './Components/LegalEstablishment';
import Governance from './Components/Governance';
import About from './Components/About';
import TenderCard from './Components/Tenders/TenderCard';
import Tenders from './Components/Tenders/Tenders';
import Careers from './Components/Careers/Careers';
import Programs from './Components/Programs/Programs';
import Donate from './Components/Donate';
import Events from './Components/Events';
import Programme from './Components/Programme/CadetProgramme';
import CadetProgramme from './Components/Programme/CadetProgramme';
import Bike from './Components/Programme/Bike';
import RoadSafety from './Components/Programme/RoadSafety';
import BuildingResilience from './Components/Programme/BuildingResilience';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Training from './Pages/Training';
import Layout from './Layout';

const App = () => {
  // return <main className="overflow-x-hidden bg-white dark:bg-black">
  //   <Navbar />
  //   <Hero />
  //   <WeAre />
  //   <Services />
  //   <Programs />
  //   <Donate />
  //   <Events />
  //   <About />
  //   <Tenders />
  //   <Careers />
  //   <CadetProgramme />
  //   <Bike />
  //   <RoadSafety />
  //   <BuildingResilience />
  //   <History />
  //   <LegalEstablishment />
  //   <Governance />
  //   <FirstAid />
  // </main>
  return (
    <Router>
      <Layout>
      <main className="overflow-x-hidden bg-white dark:bg-black">
        {/* global navbar */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are/about-us-mission-and-vision" element={<About />} />
          <Route path="/who-we-are/history-legal-establishment-and-governance" element={<HistoryPage />} />
          <Route path="/what-we-do/training" element={<Training />} />
        </Routes>


        {/* Footer */}
      </main>
      </Layout>
    </Router>
  )
};

export default App;