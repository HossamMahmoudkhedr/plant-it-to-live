import { Alert, Box, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { Link, useNavigate } from 'react-router-dom';
import CustomSelect from '../utils/customSelect';
import { fetchApi } from '../utils/fetchFromAPI';
import Loading from '../utils/loading';
import Dark from '../utils/dark';

const Signup = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [succesMessage, setSuccesMessage] = useState('');
	const navigate = useNavigate();
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (name === 'fname') {
			setData({ ...data, ['name']: value });
			// formData.append('name', value);
			setFirstName(value);
		}

		if (name === 'lname') {
			let fullName = firstName + ' ' + value;
			setData({ ...data, ['name']: fullName });
			// formData.set('name', fullName);
		}

		if (name !== 'fname' && name !== 'lname') {
			setData({ ...data, [name]: value });
			// formData.append(name, value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		fetchApi('signup', 'POST', data)
			.then((data) => {
				console.log(data);
				setLoading(false);
				setSuccesMessage(data.massage);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	};

	return (
		<>
			{succesMessage && (
				<>
					<Dark />
					<Alert
						severity="success"
						sx={{
							position: 'fixed',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: 999,
						}}>
						{succesMessage}
					</Alert>
				</>
			)}
			{loading && <Loading />}
			<Stack
				sx={{
					alignItems: 'center',
					backgroundImage: `url(${require('../assets/images/toppng.com-trees-fog-field-horizon-grass-minimalism-2560x1080.jpg')})`,
					backgroundSize: 'cover',
					backgroundPosition: { xs: '60%', lg: 'right' },
				}}>
				<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
					<Box
						sx={{
							position: 'absolute',
							left: '0',
							top: '0',
							width: '100%',
							height: '100%',
							backgroundColor: 'black',
							opacity: '35%',
							zIndex: '0',
						}}></Box>
					<Container
						maxWidth="lg"
						sx={{ marginTop: '1rem' }}>
						<Stack
							component="form"
							onSubmit={handleSubmit}
							sx={{ position: 'relative', zIndex: 1, gap: '1rem' }}>
							<Box
								sx={{
									width: '150px',
									marginLeft: '-15px',
									cursor: 'pointer',
								}}>
								<img
									style={{ width: '100%', objectFit: 'cover' }}
									src={require('../assets/images/plant-it-to-live-high-resolution-logo-colore.png')}
									alt=""
								/>
							</Box>
							<Stack sx={{ gap: '0.5rem' }}>
								<Typography
									variant="h3"
									sx={{ color: 'var(--body)', fontSize: '1.75rem' }}>
									Sign up
								</Typography>
								<Typography
									variant="body1"
									sx={{ color: '#cccccc' }}>
									Enter you details below to create your account
								</Typography>
							</Stack>

							<Grid
								container
								columnSpacing={8}
								rowSpacing={3}>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="First Name"
										labelcolor="white"
										name="fname"
										placeholder="First Name"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Last Name"
										labelcolor="white"
										name="lname"
										placeholder="Last Name"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Email"
										labelcolor="white"
										name="email"
										placeholder="Email"
										type="email"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Phone Number"
										labelcolor="white"
										name="phone"
										placeholder="Phone Number"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Password"
										labelcolor="white"
										name="password"
										placeholder="Password"
										type="password"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Confirm Password"
										labelcolor="white"
										name="confirm_password"
										placeholder="Confirm Password"
										type="password"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomSelect
										label="Gender"
										labelcolor="white"
										name="gender"
										staticOption={{
											name: 'Choose your gender',
											value: ' gender',
										}}
										options={[
											{ name: 'Male', value: 'male' },
											{ name: 'Female', value: 'female' },
										]}
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Birthdate"
										labelcolor="white"
										name="b_date"
										placeholder="DD/MM/YY"
										type="date"
										background="#fff9e374"
										restprops={{ onChange: handleInput }}
									/>
								</Grid>
							</Grid>
							<Stack
								alignItems={'center'}
								gap="1rem"
								margin="2.5rem 0 1rem 0">
								<Box
									sx={{ fontSize: '1.5rem', fontWeight: 'bold', width: '45%' }}>
									<CustomButton
										background="var(--very-dark-green)"
										borderradius="0.75rem"
										color="white"
										padding="0.7rem 0"
										text="Sign up"
										width="100%"
										restprops={{ type: 'submit' }}
									/>
								</Box>
								<Typography
									variant="body1"
									sx={{
										display: 'flex',
										gap: '0.5rem',
										fontSize: '1.5rem',
										fontWeight: '600',
										color: 'white',
									}}>
									Already have an account?{' '}
									<Link to="/login">
										<Typography
											variant="body1"
											sx={{
												fontSize: '1.5rem',
												fontWeight: '700',
												color: '#FFFADD',
												WebkitTextStroke: '1px #1F7B24',
											}}>
											Login
										</Typography>
									</Link>
								</Typography>
							</Stack>
						</Stack>
					</Container>
				</Box>
			</Stack>
		</>
	);
};

export default Signup;
