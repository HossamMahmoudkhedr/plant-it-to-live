import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Container maxWidth="xl">
			<Stack
				direction={'row'}
				sx={{
					padding: '1.5rem 3rem',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Box sx={{ width: '10%' }}>
					<img
						style={{ objectFit: 'cover' }}
						src={require(`../assets/images/plant-it-to-live-high-resolution-logo-icon 1.png`)}
						alt=""
					/>
				</Box>
				<Stack
					component="ul"
					direction="row"
					sx={{
						alignItems: 'center',
						gap: '1.5rem',
						justifyContent: 'center',
					}}>
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">Categories</a>
					</li>
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</Stack>
				<Stack
					direction="row"
					sx={{ alignItems: 'center', gap: '1rem' }}>
					<Link to={'/signup'}>
						<CustomButton
							text="Sign up"
							border="2px solid var(--black)"
							color="var(--black)"
						/>
					</Link>
					<Link to={'/login'}>
						<CustomButton
							text="Login"
							color="var(--white)"
							border="2px solid var(--black)"
							background="var(--black)"
						/>
					</Link>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Navbar;
