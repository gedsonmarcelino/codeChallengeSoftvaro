import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../../utils/Badge.svg';

import './styles.scss'

function Header() {
	return (
		<div className='header'>

			<div className='left-header'>
				<Link className='badge' to='/'>
					<img src={Badge} alt='Badge' />
				</Link>
				<Link className='header-link link1' to='/nanny'>
					<h5>Create Your Nanny Share</h5>
				</Link>
				<Link className='header-link link2' to='/shares'>
					<h5>Browse Shares</h5>
				</Link>
				<Link className='header-link link3' to='/story'>
					<h5>Our Story</h5>
				</Link>
			</div>
			<div className='right-header'>
				<button type='button' className='header-button'>
					<h5>Become a Nanny Share Host</h5>
				</button>
				<Link className='header-link sign-in' to='/login'>
					<h5>Sign In</h5>
				</Link>
			</div>

		</div>
	);
}
export default Header;
