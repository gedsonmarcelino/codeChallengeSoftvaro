import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './styles.scss'

function Framework() {
	return (
		<section className='framework'>
			<Router>
				<div className='framework-content'>
					<h2>A framework built for the long term </h2>
					<p className='framework-text'>
						Childcare is for the long term. And you need a framework
						you can count on that gives your share long term
						viability and success. That’s why we’ve defined Hapu
						around our three tribal principles; clearly defined
						process, transparency over money and equality of
						participation.
					</p>
					<Link className='read-link' to='/bridget'>
						<span>
							Read how Hapu’s tribal background defines our app
						</span>
					</Link>
				</div>
			</Router>
		</section>
	);
}
export default Framework;
