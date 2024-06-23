import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { icons } from '../utils/icons';
import { fetchApi } from '../utils/fetchFromAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import AlertMessage from '../utils/alertMessage';
import Loading from '../utils/loading';

const Activate = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setLoading(true);
		let token = window.location.href.split('?')[1].split('=')[1];
		fetchApi(`activate?token=${token}`)
			.then((data) => {
				console.log(
					'Thanks for your activation, you will be directed after a few minutes'
				);
				console.log(data.data);
				Cookies.set('user', data.data);
				setLoading(false);
				setMessage(
					'Thanks for your activation, you will be directed after a few seconds'
				);
				setError(false);
				setShow(true);
				setTimeout(() => {
					navigate('/');
				}, 3000);
			})
			.catch((error) => {
				console.log(error);
				setError(true);
				setMessage('Something went wrong, please try again');
				setShow(true);
				setLoading(false);
			});
	};
	return (
		<>
			{show && (
				<AlertMessage
					error={error}
					message={message}
				/>
			)}
			{loading && <Loading />}
			<Stack
				alignItems="center"
				margin={'2rem 0'}
				gap={'1rem'}>
				<Typography
					variant="h2"
					sx={{ fontSize: '2rem' }}>
					Thanks for signing up in our website
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: 'var(--gray)' }}>
					Please activate your account by clicking the link below
				</Typography>
				<Button
					onClick={handleClick}
					variant="contained"
					sx={{
						backgroundColor: 'var(--light-green)',
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						gap: '1rem',
						'&:hover': { backgroundColor: 'var(--light-green)' },
						padding: '1rem 2rem',
					}}>
					<Box
						component="span"
						height={'38px'}>
						{icons.circleCheck}
					</Box>
					Activate Now
				</Button>
			</Stack>
		</>
	);
};

export default Activate;
