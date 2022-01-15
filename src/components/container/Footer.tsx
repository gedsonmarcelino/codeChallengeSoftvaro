import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import HapuLogo from '../../utils/Logo.svg';
import FacebookIcon from '../../utils/Facebook.svg';
import TwitterIcon from '../../utils/Twitter.svg';
import InstagramIcon from '../../utils/Instagram.svg';

const FooterStyle = styled.div`
	background: #ffffff;
	height: 160px;
	width: 100%;
	display: grid;
	grid-template-rows: 45px 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas:
		'hapu-logo footer-links social-media'
		'. copyright . ';

	.hapu-logo {
		grid-area: hapu-logo;
		margin-left: 128px;
		align-self: center;
	}
	.hapu-logo img {
		width: 64px;
		height: 24px;
	}
	.footer-links {
		grid-area: footer-links;
		display: flex;
		gap: 30px;
		align-self: center;
	}
	.footer-link {
		text-align: center;
		text-decoration: none;
		color: #3d3d3d;
	}
	.social-media {
		grid-area: social-media;
		display: flex;
		justify-content: flex-end;
		margin-right: 128px;
		align-self: center;
	}
	.social-media img {
		width: 45px;
		height: 45px;
	}
	.twiter-icon {
		margin-left: 16px;
		margin-right: 16px;
	}
	.copyright {
		grid-area: copyright;
		text-align: center;
		align-self: end;
		margin-bottom: 32px;
		color: #3d3d3d;
		font-size: 12px;
	}

	.divider {
		display: none;
		width: 328px;
		border-top: solid 1px #dfdfdf;
	}

	@media screen and (max-width: 1000px) {
		height: 298px;

		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 2px 1fr;

		justify-items: center;

		grid-template-areas:
			' hapu-logo '
			' footer-links '
			' social-media '
			' divider'
			' copyright ';

		.footer-links {
			grid-area: footer-links;
			display: flex;
			/* justify-self: center; */
			row-gap: 17px;
			column-gap: 32px;
			align-self: center;
			width: 250px;
			flex-wrap: wrap;
			justify-content: space-evenly;
			margin-bottom: 24px;
		}
		.hapu-logo {
			margin-left: 0px;
			align-self: start;
			margin-bottom: 32px;
		}
		.social-media {
			margin-right: 0px;
			align-self: center;
			margin-bottom: 40px;
		}
		.divider {
			grid-area: divider;
			display: inherit;
			margin-bottom: 24px;
		}
		.copyright {
			margin-bottom: 24px;
		}
	}
`;
function Footer() {
	return (
		<FooterStyle>
			<Router>
				<Link className='hapu-logo' to='/'>
					<img src={HapuLogo} alt='Hapu Logo' />
				</Link>
				<div className='footer-links'>
					<Link className='footer-link' to='/share'>
						<h5>Share Your Nanny</h5>
					</Link>
					<Link className='footer-link' to='/story'>
						<h5>Our Story</h5>
					</Link>
					<Link className='footer-link' to='/blog'>
						<h5>Blog</h5>
					</Link>
					<Link className='footer-link' to='/terms'>
						<h5>Terms & Privacity</h5>
					</Link>
				</div>
				<div className='social-media'>
					<Link to='/'>
						<img src={FacebookIcon} alt='Facebook' />
					</Link>
					<Link className='twiter-icon' to='/'>
						<img src={TwitterIcon} alt='Twitter' />
					</Link>
					<Link to='/'>
						<img src={InstagramIcon} alt='Instagram' />
					</Link>
				</div>
				<p className='divider' />
				<h5 className='copyright'>
					Copyright © 2017 Hapu PTY Limited All rights reserved
				</h5>
			</Router>
		</FooterStyle>
	);
}
export default Footer;
