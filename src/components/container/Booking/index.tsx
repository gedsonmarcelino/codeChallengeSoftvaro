import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../../../utils/ProfileImage.svg';

import './styles.scss'

function Booking() {
	return (
		<section className='booking'>
			<img
				className='profile-img'
				src={ProfileImage}
				alt='User Profile'
			/>
			<Link className='action-link' to='/action'>
				<span>Sarah’s day care available now in North Sydney</span>
			</Link>
			<h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
		</section>
	);
}
export default Booking;
