import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../../utils/PlayButton.svg';

import './styles.scss'

interface Props {
	clickAction: () => null;
}

function VariantA({ clickAction }: Props) {
	return (
		<div className='variant-a'>
			<h1>Easily create or join a local nanny share with Hapu</h1>
			<h2>
				Hapu is Airbnb for nanny share. Share your home, nanny and costs
				and create new flexible, affordable solutions in childcare.
			</h2>
			<Link
				onClick={clickAction}
				className='play-button'
				to='/play'
			>
				<img src={PlayButton} alt='Play Button' />
				<span>See hapu in action (27 seconds)</span>
			</Link>
		</div>
	);
}
export default VariantA;
