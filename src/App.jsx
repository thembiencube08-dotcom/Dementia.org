import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyle } from './theme/GlobalStyle';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { DonationModal } from './components/DonationModal/DonationModal';
import { Home } from './pages/Home';
import { OurWork } from './pages/OurWork';
import { WhatIsDementia } from './pages/WhatIsDementia';
import { Talent } from './pages/Talent';
import { DonatePage } from './pages/DonatePage';
import { Team } from './pages/Team';
import { FAQ } from './pages/FAQ';
import { Impact } from './pages/Impact';
import { Financials } from './pages/Financials';
import { PrivacyPolicy, TermsOfUse } from './pages/Legal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [donateOpen, setDonateOpen] = useState(false);

  const openDonate = () => setDonateOpen(true);
  const closeDonate = () => setDonateOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Header onOpenDonate={openDonate} />
        <Routes>
          <Route path="/" element={<Home onOpenDonate={openDonate} />} />
          <Route path="/what-is-dementia" element={<WhatIsDementia onOpenDonate={openDonate} />} />
          <Route path="/programs" element={<OurWork onOpenDonate={openDonate} />} />
          <Route path="/programs/:slug" element={<OurWork onOpenDonate={openDonate} />} />
          <Route path="/about" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/get-involved" element={<Talent onOpenDonate={openDonate} />} />
          <Route path="/volunteer" element={<Talent onOpenDonate={openDonate} />} />
          <Route path="/talent" element={<Talent onOpenDonate={openDonate} />} />
          <Route path="/donate" element={<DonatePage title="Support Dementia Care" onOpenDonate={openDonate} />} />
          <Route path="/give-monthly" element={<DonatePage title="Give Monthly to DAZ" onOpenDonate={openDonate} />} />
          <Route path="/sponsor-caregiver" element={<DonatePage title="Sponsor a Family Caregiver" onOpenDonate={openDonate} />} />
          <Route path="/sponsor-student" element={<DonatePage title="Sponsor a Family Caregiver" onOpenDonate={openDonate} />} />
          <Route path="/home-visits-donate" element={<DonatePage title="Support In-Home Patient Visits" onOpenDonate={openDonate} />} />
          <Route path="/computers" element={<DonatePage title="Equip Care Teams" onOpenDonate={openDonate} />} />
          <Route path="/contact" element={<DonatePage title="Contact Dementia Association of Zimbabwe" onOpenDonate={openDonate} />} />
          <Route path="/partner" element={<DonatePage title="Partner With DAZ" onOpenDonate={openDonate} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/impact" element={<Impact onOpenDonate={openDonate} />} />
          <Route path="/testimonials" element={<Home onOpenDonate={openDonate} />} />
          <Route path="/news" element={<Home onOpenDonate={openDonate} />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<Home onOpenDonate={openDonate} />} />
        </Routes>
        <Footer />
        <DonationModal isOpen={donateOpen} onClose={closeDonate} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
