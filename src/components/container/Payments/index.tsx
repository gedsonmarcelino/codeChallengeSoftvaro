import React from 'react';
import { Link } from 'react-router-dom';
import ImgSect3 from '../../../images/ImageSection3.png';
import Divider from '../../Divider';

import './styles.scss'

function Payment() {
	return (
		<section className='payment'>
			<div className='payment-content'>
				<img
					className='payment-img'
					src={ImgSect3}
					alt='Payments share console'
				/>
				<div className='payment-text'>
					<h2>Shared payments made simple</h2>
					<p>
						Sometimes it’s hard enough just sharing a restaurant
						bill. Try sharing that bill week in, week out and
						you might encounter more than a few snares. But not
						with Hapu. Simply set your rates and our automated
						payment system takes care of the rest. You need
						never talk money or who owes what.
					</p>
					<Link className='read-link' to='/bridget'>
						<span>
							Read how Bridget’s share (without Hapu) ended
							over $15
						</span>
					</Link>
				</div>
			</div>
			<Divider />
		</section>
	);
}
export default Payment;
