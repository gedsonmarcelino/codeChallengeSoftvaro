import React from 'react';
import styled from 'styled-components';
import Hero from '../components/container/Hero';
import Booking from '../components/container/Booking';
import Share from '../components/container/Share';
import Payments from '../components/container/Payments';
import Framework from '../components/container/Framework';
import Billing from '../components/container/Billing';
import Diary from '../components/container/Diary';
import Host from '../components/container/Host';
import Footer from '../components/container/Footer';
import Header from '../components/container/Header';

const LandingPageStyle = styled.div`
	background-color: #ffffff;
`;

function LandingPage() {
  return (
    <LandingPageStyle>
      <Header />
      <Hero />
      <Booking />
      <Share />
      <Payments />
      <Framework />
      <Billing />
      <Diary />
      <Host />
      <Footer />
    </LandingPageStyle>

  );
}
export default LandingPage;
