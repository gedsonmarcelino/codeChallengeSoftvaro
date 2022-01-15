import React from 'react';
import styled from 'styled-components';
import ImgSect4 from '../../images/ImageSection4.png';

const BillingStyle = styled.section`
	height: 496px;
	background: #f2f2f2;
	display: grid;
	justify-items: center;

	img {
		width: 984px;
		height: 392px;
	}
	@media screen and (max-width: 1000px) {
		display:none;
	}
`;

function Billing() {
	return (
		<BillingStyle>
			<img src={ImgSect4} alt='Billing Dashboard' />
		</BillingStyle>
	);
}
export default Billing;
