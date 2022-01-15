import React from 'react';
import styled from 'styled-components';
import ImgSect5 from '../../images/ImageSection5.png';

const DiaryStyle = styled.section`
	height: 508px;
	background: #f2f2f2;
	display: grid;
	grid-template-rows: 2px 1fr;
	justify-items: center;

	.diary-content {
		text-align: center;
		margin-top: 96px;
	}
	img {
		width: 216px;
		height: 96px;
	}
	h2 {
		margin-top: 40px;
	}
	.Diary-text {
		width: 784px;
		margin-top: 40px;
	}
	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}

	@media screen and (max-width: 1000px) {
		height: 524px;

		.divider {
			width: 328px;
		}

		.diary-content {
			margin-top: 64px;
			width: 360px;
		}
		h2 {
			font-size: 22px;
			margin-top: 24px;
		}
		.Diary-text {
			width: 328px;
			margin-top: 16px;
			margin-left: 16px;
			margin-right: 16px;
		}
	}
`;

function Diary() {
	return (
		<DiaryStyle>
			<span className='divider' />
			<div className='diary-content'>
				<img src={ImgSect5} alt='Nanny Share Diary' />
				<h2>Coming soon: Nanny Share Daily Diary! </h2>
				<p className='Diary-text'>
					With the Hapu daily diary your nanny will be able to update
					you and your sharers with photos and commentary of the day.
					You and sharers will receive notifications and you’ll be
					able to login to view the daily adventures fo your little
					ones. We can’t wait!
				</p>
			</div>
		</DiaryStyle>
	);
}
export default Diary;
