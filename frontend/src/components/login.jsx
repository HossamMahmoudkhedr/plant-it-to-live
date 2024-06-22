import { Alert, Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../utils/customButton';
import CustomInput from '../utils/customInput';
import { icons } from '../utils/icons';
import { fetchApi } from '../utils/fetchFromAPI';
import Loading from '../utils/loading';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		fetchApi('login', 'POST', data)
			.then((data) => {
				console.log(data);
				Cookies.set('user', data.data.token);
				setErrorMessage('');
				navigate('/');
				setLoading(false);
			})
			.catch((error) => {
				console.log(error.response.data?.massage);
				setErrorMessage(error.response.data?.massage);
				setLoading(false);
			});
	};
	const handleClick = () => {
		navigate('/signup');
	};
	return (
		<>
			{loading && <Loading />}
			<img
				style={{
					position: 'fixed',
					left: '0',
					top: '0',
					height: '100%',
					width: '100%',
					objectFit: 'cover',
					zIndex: -1,
				}}
				src={require('../assets/images/smily-pot.png')}
				alt=""
			/>
			<Stack
				direction="row"
				sx={{
					height: '100vh',
					// paddingTop: '2.9rem',
					// backgroundImage: `url(${require('../assets/images/smily-pot.png')})`,
					// backgroundSize: 'cover',
					// backgroundPosition: 'center',
					justifyContent: 'flex-end',
					alignItems: 'flex-end',
				}}>
				<Box
					sx={{
						background: 'var(--body)',
						marginTop: { xs: '0', md: '1.5rem' },
						width: { xs: '100%', md: '70%', lg: '50%' },
						borderRadius: { xs: '0', md: '2.5rem 0 0 2.5rem' },
						padding: '2rem 0',
						height: { xs: '100%', md: '96%' },
					}}>
					<Stack gap="2rem">
						{errorMessage && (
							<Alert
								severity="error"
								sx={{ alignSelf: 'center' }}>
								{errorMessage}
							</Alert>
						)}
						<Stack sx={{ alignItems: 'center', gap: '1rem' }}>
							<Box>
								<img
									style={{ width: '100%', objectFit: 'cover' }}
									src={require('../assets/images/plant-it-to-live-high-resolution-logo-icon 1.png')}
									alt="Plant it to live"
								/>
							</Box>
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontSize: { xs: '1.5rem', md: '2rem' },
										fontWeight: '600',
										color: 'var(--dark-green)',
									}}>
									Login to your account
								</Typography>
							</Box>
							<CustomButton
								background="white"
								borderradius={'1rem'}
								width={{ xs: '70%', md: '40%' }}
								padding={'0.5rem 0'}
								boxshadow={'0 0 9px 0px rgba(0,0,0,0.25)'}
								color="black"
								text={`Continue with Google`}
								icon={icons.google}
								icHeight={'28px'}
								border="1px solid var(--peach)"
							/>
						</Stack>
						<Stack
							component="form"
							onSubmit={handleSubmit}
							sx={{ alignItems: 'center' }}>
							<Stack sx={{ gap: '1.5rem', width: { xs: '80%', md: '50%' } }}>
								<CustomInput
									label="Email"
									name="email"
									placeholder="Enter your email"
									type="email"
									restprops={{ required: true, onChange: handleInput }}
								/>
								<CustomInput
									label="Password"
									name="password"
									placeholder="Enter your password"
									type="password"
									restprops={{ required: true, onChange: handleInput }}
								/>
								<Stack
									direction="row"
									sx={{
										background: 'var(--very-dark-green)',
										borderRadius: '0.75rem',
									}}>
									<CustomButton
										text="Sign Up"
										color="white"
										background="var(--very-dark-green)"
										padding="1rem"
										borderradius="0.75rem"
										width="50%"
										restprops={{ onClick: handleClick }}
									/>
									<CustomButton
										text="Login"
										color="white"
										background="var(--lighter-green)"
										padding="1rem"
										borderradius="2.5rem 0.75rem 0.75rem 0"
										width="60%"
										restprops={{ type: 'submit' }}
									/>
								</Stack>
							</Stack>
						</Stack>
						<Stack alignItems="center">
							<Link
								style={{
									textDecoration: 'underline',
									color: 'var(--very-light-green)',
									fontWeight: '600',
									fontSize: { xs: '1rem', md: '1.25rem' },
								}}
								to={`/forgotPassword?user=true`}>
								Forget Password?
							</Link>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</>
	);
};

export default Login;
