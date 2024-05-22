import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
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
					<Stack sx={{ position: 'relative', zIndex: 1, gap: '1rem' }}>
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
							component="form"
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
								/>
							</Grid>
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
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<CustomInput
									label="Birthdate"
									labelcolor="white"
									name="birthdate"
									placeholder="DD/MM/YY"
									type="date"
									background="#fff9e374"
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
	);
};

export default Signup;
