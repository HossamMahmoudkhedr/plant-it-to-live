import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CustomButton from '../utils/customButton';

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
						<Stack gap="2rem">
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
								/>
								<StyledInput
									type="password"
									name="password"
									placeholder="Password"
								/>
							</Stack>
							<Stack
								direction={{ xs: 'column', lg: 'row' }}
								sx={{
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: { xs: '1rem', lg: 'unset' },
								}}>
								<Stack
									direction="row"
									gap="0.3rem"
									alignItems="center">
									<input type="checkbox" />
									<Box sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
										Remember me
									</Box>
								</Stack>
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