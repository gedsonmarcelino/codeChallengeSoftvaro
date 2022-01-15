import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgSect1 from '../../images/ImageSection1.png';

const ShareStyle = styled.section`
	display: grid;
	height: 632px;
	background: #f2f2f2;
	justify-items: center;

	.share-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 1184px;
		margin-top: 120px;
	}
	.share-text {
		justify-self: start;
		margin-left: 100px;
		display: flex;
		flex-direction: column;
		width: 445px;
	}
	.share-text h2 {
		margin-bottom: 40px;
	}
	.share-text span {
		margin-bottom: 40px;
	}
	.share-img {
		justify-self: end;
		width: 584px;
		height: 392px;
	}

	.start-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}

	.tribe-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}

	@media screen and (max-width: 1000px) {
		height: auto;

		.share-content {
			width: 360px;
			margin-top: 0px;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 270px 1fr;
			grid-template-areas:
				' share-img'
				' share-text ';
		}
		.share-text {
			grid-area: share-text;
			justify-self: center;
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			text-align: center;
		}
		.share-img {
			grid-area: share-img;
			margin-top: 64px;
			justify-self: center;
			width: 304px;
			height: 204px;
		}
		.share-text h2 {
			font-size: 22px;
			margin-top: 24px;
			margin-bottom: 16px;
		}
		.share-text span {
			margin-bottom: 24px;
		}
		.start-link {
			margin-bottom: 64px;
		}
	}
`;

function Share() {
	return (
		<ShareStyle>
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
		</ShareStyle>
	);
}
export default Share;
