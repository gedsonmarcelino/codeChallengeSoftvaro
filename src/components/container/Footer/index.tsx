import React from 'react';
import { Link } from 'react-router-dom';
import HapuLogo from '../../../utils/Logo.svg';
import FacebookIcon from '../../../utils/Facebook.svg';
import TwitterIcon from '../../../utils/Twitter.svg';
import InstagramIcon from '../../../utils/Instagram.svg';

import './styles.scss';


function Footer() {
	return (
		<div className='footer'>

			<Link className='hapu-logo' to='/'>
				<img src={HapuLogo} alt='Hapu Logo' />
			</Link>
			<div className='footer-links'>
				<Link to='/share'>
					<h5>Share Your Nanny</h5>
				</Link>
				<Link to='/story'>
					<h5>Our Story</h5>
				</Link>
				<Link to='/blog'>
					<h5>Blog</h5>
				</Link>
				<Link to='/terms'>
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
		</div>
	);
}
export default Footer;
