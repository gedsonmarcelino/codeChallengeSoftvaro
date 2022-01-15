import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import CalendarIcon from '../../utils/CalendarIcon.svg';

const HostStyle = styled.section`
	height: 380px;
	background: #ffffff;
	display: grid;
	justify-items: center;

	.host-content {
		margin-top: 80px;
		text-align: center;
	}
	.host-button {
		width: 304px;
		height: 68px;
		margin-bottom: 24px;
		border-radius: 4px;
		border: none;
		background-color: #5e20a4;
		color: #ffffff;
		cursor: pointer;
		display: grid;
		place-items: center;
		grid-template-columns: 56px 1fr;
		grid-template-rows: 38px 1fr;
		grid-template-areas:
			'calendar-icon button-text'
			'calendar-icon button-subtext';
	}
	.host-button span {
		color: #ffffff;
		margin-left: 20px;
	}
	.create-link {
		text-decoration: none;
		display: grid;
		justify-items: center;
	}

	.calendar-icon {
		grid-area: calendar-icon;
		width: 32px;
		height: 32px;
		justify-self: end;
	}
	.button-text {
		grid-area: button-text;
		font-size: 16px;
		line-height: 28px;
		font-weight: 400;
		justify-self: start;
		align-self: end;
	}
	.button-subtext {
		grid-area: button-subtext;
		font-size: 12px;
		line-height: 16px;
		font-weight: 400;
		justify-self: start;
		align-self: start;
	}
	h2 {
		margin-bottom: 16px;
	}
	p {
		margin-bottom: 32px;
	}
	.host-link {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}

	@media screen and (max-width: 1000px) {
		height: 288px;

		.host-content {
			width: 360px;
			margin-top: 40px;
		}

		h2 {
			font-size: 22px;
			margin-bottom: 0px;
		}
		p {
			font-size: 16px;
			line-height: 28px;
			margin-bottom: 24px;
		}
	}
`;

function Host() {
	return (
		<HostStyle>
			<Router>
				<div className='host-content'>
					<h2>Become a nanny share host </h2>
					<p>Takes less than 5 minutes to get started</p>
					<Link className='create-link' to='/login'>
						<button type='button' className='host-button'>
							<img
								className='calendar-icon'
								src={CalendarIcon}
								alt='Nanny Share Calendar Button'
							/>
							<span className='button-text'>
								Create your nanny share
							</span>
							<span className='button-subtext'>
								Takes less than 5 minutes
							</span>
						</button>
					</Link>
					<Link to='/browse'>
						<span className='host-link'>
							Or browse local nanny-shares
						</span>
					</Link>
				</div>
			</Router>
		</HostStyle>
	);
}
export default Host;
