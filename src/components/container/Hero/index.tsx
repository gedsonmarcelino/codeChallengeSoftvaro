import React from 'react';
import ImgHero from '../../../images/ImageHeader.png';

import './styles.scss'

const Hero = () => (
	<div className='hero'>
		<div className='hero-content'>
			<div className='hero-text'>
				<div className='variant-a'>
					<h1>
						Easily create or join a local nanny share with
						Hapu
					</h1>
					<h2>
						Hapu is Airbnb for nanny share. Share your home,
						nanny and costs and create new flexible,
						affordable solutions in childcare.
					</h2>
				</div>
			</div>
			<img
				className='img-hero'
				src={ImgHero}
				alt="Hapu's Console"
			/>
		</div>
	</div>
);

export default Hero;
