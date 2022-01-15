import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ImgSect1 from '../../../images/ImageSection1.png';

import './styles.scss'

function Share() {
	return (
		<section className='share'>
			<Router>
				<div className='share-content'>
					<div className='share-text'>
						<h2>
							Share your home, <br />
							nanny and costs
						</h2>
						<span>
							You have a fantastic home, a fantastic nanny and
							wouldn’t cutting your costs in half be, well,
							fantastic?! If only it was easy to connect with
							other parents to share your costs? Well now it is,
							with Hapu.
							<Link className='tribe-link' to='/tribe'>
								<span>Hapu means tribe </span>
							</Link>
							and it’s our foundational 3 tribal principles that
							empowers you to create and manage your own tribe. A
							tribe that together has the power to create new
							affordable solutions in childcare that work for you
							and your community.
						</span>
						<Link className='start-link' to='/start'>
							<span>Ready to get started?</span>
						</Link>
					</div>
					<img
						className='share-img'
						src={ImgSect1}
						alt="Hapu's App"
					/>
				</div>
			</Router>
		</section>
	);
}
export default Share;
