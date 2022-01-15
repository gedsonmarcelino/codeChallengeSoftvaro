import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ImgSect3 from '../../../images/ImageSection3.png';

import './styles.scss'

function Payment() {
	return (
		<section className='payment'>
			<Router>
				<div className='Payment-content'>
					<img
						className='Payment-img'
						src={ImgSect3}
						alt='Payments share console'
					/>
					<div className='Payment-text'>
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
				<span className='divider' />
			</Router>
		</section>
	);
}
export default Payment;
