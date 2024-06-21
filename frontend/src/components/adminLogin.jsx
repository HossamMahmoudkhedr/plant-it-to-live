import { Alert, Box, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../utils/customButton';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const StyledInput = styled.input`
	padding: 1rem 0.3rem;
	border-bottom: 1px solid black;
	outline: none;
	border-top: none;
	border-right: none;
	border-left: none;
	font-size: 1.25rem;
	&::placeholder {
		color: #acacac;
		font-weight: 300;
	}
`;

const AdminLogin = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formValues, setFormValues] = useState({});
	const navigate = useNavigate();
	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		if (formValues.email && formValues.password) {
			formData.append('email', formValues.email);
			formData.append('password', formValues.password);
		}

		console.log(formData.has('email'), formData.has('password'));

		if (formData.has('email') && formData.has('password')) {
			fetchApi('admin/login', 'POST', formData)
				.then((data) => {
					console.log(data);

					Cookies.set('admin', data.data.token);
					setErrorMessage('');
					navigate('/adminDashboard');
				})
				.catch((error) => {
					console.log(error.response.data?.massage);
					setErrorMessage(error.response.data?.massage);
				});
		} else {
			setErrorMessage('Please enter both email and password.');
		}
	};
	return (
		<Box
			sx={{
				backgroundImage: `url(${require('../assets/images/admin.jpg')})`,
				width: '100%',
				height: '100vh',
				backgroundSize: 'cover',
				padding: '3rem 0',
			}}>
			<Box
				sx={{
					backgroundColor: 'black',
					opacity: '0.3',
					position: 'absolute',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%',
					zIndex: '0',
				}}></Box>
			<Container maxWidth={'xl'}>
				<Stack
					sx={{
						alignItems: 'center',
						gap: '2rem',
						position: 'relative',
						zIndex: '9',
					}}>
					<Box width="130px">
						<img
							width="100%"
							src={require('../assets/images/plant-it-to-live-high-resolution-logo-colore.png')}
							alt=""
						/>
					</Box>
					<Stack
						sx={{
							backgroundColor: 'white',
							padding: '3rem 3rem 2rem 3rem',
							gap: '1rem',
							width: { xs: '95%', md: '50%', lg: '40%' },
						}}>
						{errorMessage && <Alert severity="error">{errorMessage}</Alert>}
						<Stack
							component="form"
							onSubmit={handleSubmit}
							gap="2rem">
							<Stack gap="0.5rem">
								<Typography
									variant="h4"
									sx={{ fontWeight: 'bold' }}>
									Admin Login
								</Typography>
								<Typography
									variant="body1"
									sx={{ color: '#555555' }}>
									Please enter your login info
								</Typography>
							</Stack>
							<Stack gap="0.5rem">
								<StyledInput
									type="email"
									name="email"
									placeholder="Email"
									onChange={handleInput}
								/>
								<StyledInput
									type="password"
									name="password"
									placeholder="Password"
									onChange={handleInput}
								/>
							</Stack>
							<Stack
								direction={{ xs: 'column', lg: 'row' }}
								sx={{
									alignItems: 'center',
									justifyContent: 'center',
									gap: { xs: '1rem', lg: 'unset' },
								}}>
								<a
									style={{
										textDecoration: 'underline',
										color: '#555555',
										fontWeight: '600',
										fontSize: { xs: '1rem', md: '1.25rem' },
									}}
									href="">
									Forgot your password?
								</a>
							</Stack>
							<Box
								width="100%"
								fontWeight="bold"
								fontSize="1.5rem">
								<CustomButton
									background="#1C7D03"
									color="white"
									padding="0.5rem 0"
									text="Login"
									width="100%"
									borderradius="0.8rem"
									restprops={{ type: 'submit' }}
								/>
							</Box>
						</Stack>
					</Stack>
				</Stack>
			</Container>
			;
		</Box>
	);
};

export default AdminLogin;
