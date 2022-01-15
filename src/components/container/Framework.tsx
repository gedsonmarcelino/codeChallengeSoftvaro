import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const FrameworkStyle = styled.section`
	height: 380px;
	background: #f2f2f2;
	display: grid;
	justify-items: center;

	.framework-content {
		text-align: center;
		margin-top: 96px;
	}
	.framework-text {
		width: 784px;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.read-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}

	@media screen and (max-width: 1000px) {
		height: 476px;

		.framework-content {
			width: 360px;
			margin-top: 64px;
		}
		.framework-text {
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			margin-top: 16px;
			margin-bottom: 24px;
		}
		h2 {
			font-size: 22px;
			width: 245px;
			margin-left: 60px;
			margin-right: 60px;
		}
		.read-link span {
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
		}
	}
`;

function Framework() {
	return (
		<FrameworkStyle>
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
		</FrameworkStyle>
	);
}
export default Framework;
