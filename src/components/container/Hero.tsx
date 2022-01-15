import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styled from 'styled-components';
import ImgHero from '../../images/ImageHeader.png';

const HeroStyle = styled.section`
	height: 616px;
	display: grid;
	justify-items: center;
	background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7),
		url(/Image.png);
	object-fit: cover;
	background-blend-mode: overlay;
	background-size: cover;
	place-self: center stretch;

	.hero-content {
		display: grid;
		width: 1184px;
		grid-template-columns: 1fr 1fr;
		color: #ffffff;
	}
	.hero-text {
		margin-top: 200px;
	}
	.img-hero {
		width: 316px;
		height: 290px;
		margin-right: 100px;
		margin-top: 170px;
		justify-self: end;
	}

	@media screen and (max-width: 1000px) {
		height: 540px;
		background-position: left 756px bottom 0px;

		.hero-content {
			display: grid;
			width: 328px;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			color: #ffffff;
			margin-top: 0px;
		}
		.hero-text {
			margin-top: 152px;
		}
		.img-hero {
			display: none;
		}
	}
`;

const VariantAStyle = styled.div`
	.play-button {
		display: flex;
		align-self: center;
		justify-content: flex-start;
		color: #ffffff;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}
	.play-button img {
		width: 48px;
		height: 48px;
	}
	.play-button span {
		margin-left: 16px;
		align-self: center;
	}
	h1 {
		margin-bottom: 24px;
	}
	h2 {
		margin-bottom: 40px;
		font-size: 18px;
		line-height: 24px;
	}

	@media screen and (max-width: 1000px) {
		display: grid;
		justify-items: center;

		h1 {
			margin-bottom: 16px;
			font-size: 28px;
			font-weight: 500;
			line-height: 32px;
			letter-spacing: 0;
			text-align: center;
			width: 272px;
		}
		h2 {
			font-size: 16px;
			font-weight: 400;
			line-height: 28px;
			text-align: center;
			width: 288px;
			margin-bottom: 66px;
		}
	}
`;

const Hero = () => (
	<HeroStyle>
		<Router>
			<div className='hero-content'>
				<div className='hero-text'>
					<VariantAStyle>
						<h1>
							Easily create or join a local nanny share with
							Hapu
						</h1>
						<h2>
							Hapu is Airbnb for nanny share. Share your home,
							nanny and costs and create new flexible,
							affordable solutions in childcare.
						</h2>
					</VariantAStyle>
				</div>
				<img
					className='img-hero'
					src={ImgHero}
					alt="Hapu's Console"
				/>
			</div>
		</Router>
	</HeroStyle>
);

export default Hero;
