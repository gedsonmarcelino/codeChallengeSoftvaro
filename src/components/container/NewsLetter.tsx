import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const NewsLetterStyle = styled.section`
	height: 322px;
	background: #f2f2f2;
	display: grid;
	justify-items: center;

	.newsletter-content {
		width: 984px;
		display: grid;
		justify-items: center;
	}
	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}
	h3 {
		margin-top: 64px;
	}
	span {
		margin-top: 16px;
		font-size: 18px;
	}
	.form-fields {
		margin-top: 74px;
		margin-bottom: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.form-field {
		width: 232px;
		height: 48px;
		border-radius: 4px;
		border: 1px solid #dfdfdf;
		margin-right: 12px;
		padding-left: 20px;
	}
	.send-button {
		display: grid;
		place-items: center;
		height: 48px;
		width: 96px;
		border-radius: 4px;
		border: none;
		background-color: #00a870;
		color: #ffffff;
		text-decoration: none;
		cursor: pointer;
	}

	@media screen and (max-width: 1000px) {
		height: 496px;

		span {
		}
		.newsletter-content {
			width: 360px;
		}

		h3 {
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			text-align: center;
			margin-top: 64px;
		}
		span {
			margin-top: 16px;
			font-size: 16px;
			line-height: 28px;

			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			text-align: center;
		}
		.form-fields {
			margin-top: 32px;
			margin-bottom: 64px;
			display: flex;
			gap: 10px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.form-field {
			width: 308px;
			margin-right: 0px;
			/* padding-left: 0px; */
		}
		.send-button {
			margin-top: 8px;
			width: 328px;
		}
		.divider {
			width: 328px;
		}
	}
`;

function NewsLetter() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const newsLetterPost = async (data: any) => {
		try {
			const resp = await axios.post(
				'https://api.jungledevs.com/api/v1/challenge-newsletter/',
				data
			);
			console.log('Data post: ', data);
			console.log(resp.data);

			alert('Newsletter signed.');
		} catch (err) {
			console.error(err);
		}
	};

	const onSubmit = (data: any) => {
		console.log(errors);
		newsLetterPost(data);
	};

	return (
		<NewsLetterStyle>
			<div className='newsletter-content'>
				<p className='divider' />
				<h3>Are you a parent without a nanny and looking to share?</h3>
				<span>
					Leave us your name and email and we’ll update you as soon as
					a share becomes available in your area!
				</span>

				<form className='form-fields' onSubmit={handleSubmit(onSubmit)}>
					<input
						className='form-field'
						type='text'
						placeholder='Your name'
						{...register('name', {
							required: true,
							max: 30,
							min: 3,
							maxLength: 80
						})}
					/>
					<input
						className='form-field'
						type='email'
						placeholder='Your email'
						{...register('email', {
							required: true,
							pattern: /^\S+@\S+$/i
						})}
					/>
					<button type='submit' className='send-button'>
						<h5>Send</h5>
					</button>

					{/* <input type='submit' /> */}
				</form>
				<p className='divider' />
			</div>
		</NewsLetterStyle>
	);
}
export default NewsLetter;
