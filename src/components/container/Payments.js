import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgSect3 from '../../images/ImageSection3.png';

const PaymentStyle = styled.section`
	display: grid;
	justify-items: center;
	height: 528px;
	background: #f2f2f2;

	.Payment-content {
		margin-top: 104px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 44px;
		width: 984px;
	}
	.Payment-text {
		width: 450px;
	}
	.Payment-text h2 {
		margin-bottom: 40px;
	}
	.Payment-text p {
		margin-bottom: 40px;
	}
	.Payment-img {
		width: 456px;
		height: 336px;
		justify-self: end;
	}
	.read-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}
	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
		align-self: end;
	}

	@media screen and (max-width: 1000px) {
		height: 746px;

		h2 {
			font-size: 22px;
		}

		.Payment-content {
			margin-top: 0px;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			gap: 0;
			width: 360px;
			text-align: center;
		}
		.Payment-text {
			width: 328px;
			margin-top: 16px;
			margin-top: 0px;
			margin-bottom: 24px;
		}
		.Payment-text h2 {
			font-size: 22px;
			width: 245px;
			margin-left: 60px;
			margin-right: 60px;
		}
		.Payment-text p {
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			margin-bottom: 40px;
		}
		.Payment-img {
			width: 312px;
			height: 230px;
			margin-top: 64px;
			margin-bottom: 40px;

			justify-self: center;
		}
		.divider {
			width: 328px;
		}
		.read-link span {
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			margin-bottom: 64px;
		}
		.read-link  {
			margin-bottom: 64px;
		}
	}
`;

function Payment() {
	return (
		<PaymentStyle>
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
		</PaymentStyle>
	);
}
export default Payment;
