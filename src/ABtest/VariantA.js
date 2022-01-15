import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlayButton from '../utils/PlayButton.svg';

const VariantAStyle = styled.div`
	.play-button {
		display: flex;
		align-self: center;
		justify-content: flex-start;
		color: #ffffff;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}
	.play-button img {
		width: 48px;
		height: 48px;
	}
	.play-button span {
		margin-left: 16px;
		align-self: center;
	}
	h1 {
		margin-bottom: 24px;
	}
	h2 {
		margin-bottom: 40px;
		font-size: 18px;
		line-height: 24px;
	}

	@media screen and (max-width: 1000px) {
		display: grid;
		justify-items: center;

		h1 {
			margin-bottom: 16px;
			font-size: 28px;
			font-weight: 500;
			line-height: 32px;
			letter-spacing: 0;
			text-align: center;
			width: 272px;
		}
		h2 {
			font-size: 16px;
			font-weight: 400;
			line-height: 28px;
			text-align: center;
			width: 288px;
			margin-bottom: 66px;
		}
	}
`;

function VariantA(props) {
	return (
		<VariantAStyle>
			<h1>Easily create or join a local nanny share with Hapu</h1>
			<h2>
				Hapu is Airbnb for nanny share. Share your home, nanny and costs
				and create new flexible, affordable solutions in childcare.
			</h2>
			<Link
				onClick={props.clickAction}
				className='play-button'
				to='/play'
			>
				<img src={PlayButton} alt='Play Button' />
				<span>See hapu in action (27 seconds)</span>
			</Link>
		</VariantAStyle>
	);
}
export default VariantA;
