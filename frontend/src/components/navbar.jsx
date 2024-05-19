import { Box, Container, Stack } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';
import { icons } from '../utils/icons';
import Dark from '../utils/dark';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleMenu = () => {
		setShow((prev) => !prev);
	};
	return (
		<Container maxWidth="xl">
			{show && <Dark setShow={setShow} />}
			<Stack
				direction={'row'}
				sx={{
					padding: { xs: '1.5rem 1rem', lg: '1.5rem 3rem' },
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
				<Box
					component="span"
					onClick={handleMenu}
					sx={{ cursor: 'pointer', display: { xs: 'block', lg: 'none' } }}>
					{icons.menu}
				</Box>
				<Stack
					direction={{ xs: 'column', lg: 'row' }}
					sx={{
						alignItems: 'center',
						width: { xs: '80%', lg: '63.5%' },
						position: { xs: 'fixed', lg: 'unset' },
						left: { xs: show ? '0%' : '-100%', lg: 'unset' },
						top: { xs: '0', lg: 'unset' },
						zIndex: { xs: '9', lg: 'unset' },
						backgroundColor: { xs: 'var(--body)', lg: 'unset' },
						height: { xs: '100vh', lg: 'unset' },
						justifyContent: { xs: 'unset', lg: 'space-between' },
						gap: { xs: '2rem', lg: 'unset' },
						padding: { xs: '5rem 0', lg: 'unset' },
						transition: 'all 0.3s linear',
					}}>
					<Box
						component="span"
						onClick={handleMenu}
						sx={{
							position: 'absolute',
							left: '20px',
							top: '20px',
							zIndex: '9',
							cursor: 'pointer',
							display: { xs: 'block', lg: 'none' },
						}}>
						{icons.closeIcon}
					</Box>
					<Stack
						component="ul"
						direction={{ xs: 'column', lg: 'row' }}
						sx={{
							alignItems: 'center',
							gap: { xs: '2rem', lg: '1.5rem' },
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
			</Stack>
		</Container>
	);
};

export default Navbar;
