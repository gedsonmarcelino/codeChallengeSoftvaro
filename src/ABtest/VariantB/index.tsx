import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../../utils/PlayButton.svg';

import './styles.scss'

interface Props {
	clickAction: () => null
}

function VariantB({ clickAction }: Props) {
	return (
		<div className='variant-b'>
			<h1>Create the childcare you need at a price you can afford</h1>
			<h2>
				Connect with other local families to share a nanny from as low
				as $10.00/hr each. Create your family profile today to get
				started.
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
export default VariantB;
