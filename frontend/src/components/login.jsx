import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../utils/customButton';
import CustomInput from '../utils/customInput';
import { icons } from '../utils/icons';

const Login = () => {
	return (
		<Stack
			direction="row"
			sx={{
				height: '100vh',
				backgroundImage: `url(${require('../assets/images/smily-pot.png')})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				justifyContent: 'flex-end',
			}}>
			<Box
				sx={{
					background: 'var(--body)',
					marginTop: { xs: '0', md: '1.5rem' },
					width: { xs: '100%', md: '70%', lg: '50%' },
					borderRadius: { xs: '0', md: '2.5rem 0 0 2.5rem' },
					padding: '2rem 0',
				}}>
				<Stack gap="2rem">
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
						sx={{ alignItems: 'center' }}>
						<Stack sx={{ gap: '1.5rem', width: { xs: '80%', md: '50%' } }}>
							<CustomInput
								label="Email"
								name="email"
								placeholder="Enter your email"
								type="email"
								restprops={{ required: true }}
							/>
							<CustomInput
								label="Password"
								name="password"
								placeholder="Enter your password"
								type="password"
								restprops={{ required: true }}
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
								/>
								<CustomButton
									text="Login"
									color="white"
									background="var(--lighter-green)"
									padding="1rem"
									borderradius="2.5rem 0.75rem 0.75rem 0"
									width="60%"
								/>
							</Stack>
						</Stack>
					</Stack>
					<Stack alignItems="center">
						<a
							style={{
								textDecoration: 'underline',
								color: 'var(--very-light-green)',
								fontWeight: '600',
								fontSize: { xs: '1rem', md: '1.25rem' },
							}}
							href="">
							Forget Password?
						</a>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
};

export default Login;
