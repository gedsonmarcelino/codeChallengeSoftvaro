import React from 'react';
import ImgSect5 from '../../../images/ImageSection5.png';
import Divider from '../../Divider';

import './styles.scss'

function Diary() {
	return (
		<section className='diary'>
			<Divider />
			<div className='diary-content'>
				<img src={ImgSect5} alt='Nanny Share Diary' />
				<h2>Coming soon: Nanny Share Daily Diary!</h2>
				<p className='diary-text'>
					With the Hapu daily diary your nanny will be able to update
					you and your sharers with photos and commentary of the day.
					You and sharers will receive notifications and you’ll be
					able to login to view the daily adventures fo your little
					ones. We can’t wait!
				</p>
			</div>
		</section>
	);
}
export default Diary;
