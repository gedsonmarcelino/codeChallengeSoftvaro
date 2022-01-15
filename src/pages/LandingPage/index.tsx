import React from 'react';

import Hero from '../../components/container/Hero';
import Booking from '../../components/container/Booking';
import Share from '../../components/container/Share';
import Payments from '../../components/container/Payments';
import Framework from '../../components/container/Framework';
import Billing from '../../components/container/Billing';
import Diary from '../../components/container/Diary';
import Host from '../../components/container/Host';
import Footer from '../../components/container/Footer';
import Header from '../../components/container/Header';

import './styles.scss'
import News from '../../components/container/News';

function LandingPage() {
	return (
		<div className='landing-page'>
			<Header />
			<Hero />
			<Booking />
			<Share />
			<Payments />
			<Framework />
			<Billing />
			<News />
			<Diary />
			<Host />
			<Footer />
		</div>
	);
}
export default LandingPage;
