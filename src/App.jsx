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
import Tender from './Pages/Tender';
import FirstAidAtWork from './Components/Training/FirstAidAtWork';
import FirstAidRefresher from './Components/Training/FirstAidRefresher';
import LifeSaverInternationalFirstAid from './Components/Training/LifeSaverInternationalFirstAid';
import EmergencyFirstAid from './Components/Training/EmergencyFirstAid';
import PediatricFirstAid from './Components/Training/PediatricFirstAid';
import AviationFirstAid from './Components/Training/AviationFirstAid';
import WildernessFirstAid from './Components/Training/WilderrnessFirstAid';
import FirstAidAwareness from './Components/Training/FirstAidAwareness';
import FireMarshal from './Components/Training/FireMarshal';
import BasicFireSafety from './Components/Training/BasicFireSafety';
import FireSafetyAwareness from './Components/Training/FireSafetyAwareness';
import OccupationalSafetyAndHealth from './Components/Training/OccupationalSafetyAndHealth';
import DisasterPreparednessAndResponse from './Components/Training/DisasterPreparednessAndResponse';
import EmergencyMedicalResponder from './Components/Training/EmergencyMedicalResponder';
import AdvancedCardiovascularLifeSupport from './Components/Training/AdvancedCardiovascularLifeSupport';
import BasicLifeSupport from './Components/Training/BasicLifeSupport';
import BasicCareGiver from './Components/Training/BasicCareGiver';
import EMTCertificate from './Components/Training/EMTCertificate';
import EMTDiploma from './Components/Training/EMTDiploma';
import EMEAProgramme from './Pages/programmes/EMEAProgramme';
import Careers2 from './Components/Careers/Careers2';
import DonateNow from './Components/DonateNow';
import DonationThankYou from './Pages/DonationThankYou';

const App = () => {
  // return <main className="overflow-x-hidden bg-white dark:bg-black">
  {/* <Navbar /> */ }
  {/* <FirstAidAtWork /> */ }
  {/* <FirstAidRefresher /> */ }
  {/* <LifeSaverInternationalFirstAid /> */ }
  {/* <EmergencyFirstAid /> */ }
  {/* <PediatricFirstAid /> */ }
  {/* <AviationFirstAid /> */ }
  {/* <WildernessFirstAid /> */ }
  {/* <FirstAidAwareness /> */ }
  {/* <FireMarshal /> */ }
  {/* <BasicFireSafety /> */ }
  {/* <FireSafetyAwareness /> */ }
  {/* <OccupationalSafetyAndHealth /> */ }
  {/* <DisasterPreparednessAndResponse /> */ }
  {/* <EmergencyMedicalResponder /> */ }
  {/* <AdvancedCardiovascularLifeSupport /> */ }
  {/* <BasicLifeSupport /> */ }
  {/* <BasicCareGiver /> */ }
  {/* <EMTCertificate /> */ }
    {/* <Training /> */}
  // <DonateNow />


  {/* <EMTDiploma /> 
  <EMEAProgramme /> 
   <Hero />
    <WeAre />
    <BuildingResilience />
    <FirstAid />
    <Services />
    <Programs />
    <Donate />
    <Events />
    <About />
    <Tenders />
    <Careers />
    <CadetProgramme />
    <Bike />
    <RoadSafety />
    <History />
    <LegalEstablishment />
    <Governance />  */}
  {/* </main>  */}

  return (
      // <DonateNow />

    <Router>
      <Layout>
        <main className="overflow-x-hidden bg-white dark:bg-black">
          {/* global navbar */}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/who-we-are/about-us-mission-and-vision" element={<About />} />
            <Route path="/who-we-are/history-legal-establishment-and-governance" element={<HistoryPage />} />

            {/* Training main */}
            <Route path="/what-we-do/training" element={<Training />} />

            {/* Individual courses */}
            <Route path="/what-we-do/training/first-aid-at-work" element={<FirstAidAtWork />} />
            <Route path="/what-we-do/training/first-aid-refresher" element={<FirstAidRefresher />} />
            <Route path="/what-we-do/training/lifesaver-international-first-aid" element={<LifeSaverInternationalFirstAid />} />
            <Route path="/what-we-do/training/emergency-first-aid" element={<EmergencyFirstAid />} />
            <Route path="/what-we-do/training/pediatric-first-aid" element={<PediatricFirstAid />} />
            <Route path="/what-we-do/training/aviation-first-aid" element={<AviationFirstAid />} />
            <Route path="/what-we-do/training/wilderness-first-aid" element={<WildernessFirstAid />} />
            <Route path="/what-we-do/training/first-aid-awareness" element={<FirstAidAwareness />} />
            <Route path="/what-we-do/training/fire-marshal" element={<FireMarshal />} />
            <Route path="/what-we-do/training/basic-fire-safety" element={<BasicFireSafety />} />
            <Route path="/what-we-do/training/fire-safety-awareness" element={<FireSafetyAwareness />} />
            <Route path="/what-we-do/training/occupational-safety-and-health" element={<OccupationalSafetyAndHealth />} />
            <Route path="/what-we-do/training/disaster-preparedness-response" element={<DisasterPreparednessAndResponse />} />
            <Route path="/what-we-do/training/emergency-medical-responder" element={<EmergencyMedicalResponder />} />
            <Route path="/what-we-do/training/acls" element={<AdvancedCardiovascularLifeSupport />} />
            <Route path="/what-we-do/training/bls" element={<BasicLifeSupport />} />
            <Route path="/what-we-do/training/basic-caregiver" element={<BasicCareGiver />} />
            <Route path="/what-we-do/training/emt-certificate" element={<EMTCertificate />} />
            <Route path="/what-we-do/training/emt-diploma" element={<EMTDiploma />} />
            <Route path="/projects/emea-project-st-john-ambulance-kenya" element={<EMEAProgramme />} />
            {/* <Route path="/what-we-do/training/emt-diploma-upgrade" element={<EMTDiplomaUpgrade />} /> */}

            {/* Others */}
            <Route path="/opportunities/tenders" element={<Tender />} />
            <Route path="/opportunities/careers" element={<Careers2 />} />
            <Route path="/ways-to-get-involved/donate" element={<DonateNow />} />
            <Route path="/donate/thank-you/:donationId" element={<DonationThankYou />} />
          </Routes>


          {/* Footer */}
        </main>
      </Layout>
    </Router>
  )
  
};

export default App;