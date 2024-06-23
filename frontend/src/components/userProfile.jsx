import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { icons } from '../utils/icons';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../utils/heading';
import MyProfile from './myProfile';
import Security from './security';
import SuggestPlant from './suggestPlant';
import MyCrops from './myCrops';
import Cookies from 'js-cookie';
import { fetchApi } from '../utils/fetchFromAPI';

const pages = [
	{ name: 'My profile', component: <MyProfile /> },
	{ name: 'Security', component: <Security isUser={true} /> },
	{ name: 'My crops', component: <MyCrops /> },
	{ name: 'Help us', component: <SuggestPlant admin={false} /> },
];

const StyledBox = styled(Box)`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;

	& p {
		font-weight: bold;
		font-size: 1.5rem;
	}
`;

const UserProfile = () => {
	const [currPage, setCurrPage] = useState(0);
	const [userData, setUserData] = useState({});
	const [showSide, setShowSide] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (!Cookies.get('user')) {
			navigate('/login');
			window.location.reload();
		}
		fetchApi(`user?token=${Cookies.get('user')}`)
			.then((data) => {
				console.log(data);
				setUserData(data.data);
			})
			.catch((error) => {
				console.log(error);
				navigate('/login');
			});
	}, []);

	const handleLogout = () => {
		fetchApi(`logout?token=${Cookies.get('user')}`, 'GET').then((data) => {
			console.log(data);
			Cookies.remove('user');
			navigate('/');
		});
	};
	return (
		<Box>
			<Box
				sx={{
					position: 'absolute',
					left: '20px',
					top: '20px',
					zIndex: '99',
					display: { xs: 'block', lg: 'none' },
				}}>
				<Button
					variant="containted"
					sx={{
						background: '#aaa',
						borderRadius: '1rem',
						'&:hover': { background: '#aaa' },
					}}
					onClick={() => {
						setShowSide(!showSide);
					}}>
					{icons.menu}
				</Button>
			</Box>
			<Box
				sx={{
					width: { xs: '80%', lg: '20%' },
					float: 'left',
					backgroundColor: 'white',
					position: 'fixed',

					height: '100vh',
					// position: { xs: 'fixed', lg: 'unset' },
					left: { xs: 0, lg: 'unset' },
					transform: {
						xs: `${showSide ? 'translateX(0%)' : 'translateX(-180%)'}`,
						lg: 'unset',
					},

					zIndex: 9,
				}}>
				<Stack
					sx={{
						padding: '1.5rem',
						justifyContent: 'space-between',
						height: '100%',
					}}>
					<Stack sx={{ gap: '2rem' }}>
						<Stack
							sx={{
								alignItems: 'center',
							}}>
							<Link to="/">
								<Box>
									<img
										src={require('../assets/images/plant-it-to-live-high-resolution-logo-icon 1.png')}
										alt="Plant it to live"
									/>
								</Box>
							</Link>
						</Stack>
						<Stack sx={{ alignItems: 'center' }}>
							<Stack
								component="ul"
								gap="1.5rem">
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(0);
									}}>
									<Box
										component="span"
										height="30px"
										sx={{
											fill: currPage === 0 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										{icons.user}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{
											color: currPage === 0 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										My profile
									</Typography>
								</StyledBox>
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(1);
									}}>
									<Box
										component="span"
										height="30px"
										sx={{
											stroke: currPage === 1 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										{icons.security}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{
											color: currPage === 1 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										Security
									</Typography>
								</StyledBox>
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(2);
									}}>
									<Box
										component="span"
										height="30px"
										sx={{
											fill: currPage === 2 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										{icons.crop}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{
											color: currPage === 2 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										My crops
									</Typography>
								</StyledBox>
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(3);
									}}>
									<Box
										component="span"
										height="30px"
										sx={{
											stroke: currPage === 3 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										{icons.help}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{
											color: currPage === 3 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										Help Us
									</Typography>
								</StyledBox>
							</Stack>
						</Stack>
					</Stack>
					<Button
						variant="contained"
						onClick={handleLogout}
						disableElevation
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							width: 'fit-content',
							backgroundColor: 'transparent',
							'&:hover': { backgroundColor: 'transparent' },
						}}>
						<Box
							component="span"
							height="30px">
							{icons.logout}
						</Box>{' '}
						<Typography
							variant="body1"
							sx={{
								color: '#CFCAB6',
								fontWeight: 'bold',
								fontSize: '1.5rem',
								textTransform: 'capitalize',
							}}>
							Log out
						</Typography>
					</Button>
				</Stack>
			</Box>
			<Box
				sx={{
					width: { xs: '100%', lg: '80%' },
					float: { xs: 'unset', lg: 'right' },
				}}>
				<Stack
					direction="row"
					sx={{
						alignItems: 'center',
						padding: '2rem',
						justifyContent: 'flex-end',
						backgroundColor: 'white',
					}}>
					<Stack
						direction="row"
						sx={{ alignItems: 'center' }}>
						<Link
							to="/"
							component="span"
							style={{ padding: '0rem 1rem 0rem 0rem', height: '35px' }}>
							{icons.home}
						</Link>
						<Stack
							direction={{ xs: 'column', lg: 'row-reverse' }}
							sx={{ alignItems: 'center', gap: '1rem' }}>
							{!userData.picture && (
								<Box
									component="span"
									height="55px">
									{icons.avatar}
								</Box>
							)}
							{userData.picture && (
								<Box
									sx={{
										width: '60px',
										height: '60px',
										overflow: 'hidden',
										borderRadius: '50%',
									}}>
									<img
										style={{ width: '100%', objectFit: 'cover' }}
										src={require(`../assets/images/${userData.picture}`)}
										alt=""
									/>
								</Box>
							)}
							<Typography
								variant="body1"
								sx={{
									color: 'var(--dark-green)',
									fontWeight: 'bold',
									padding: '0rem 0rem 0rem 1rem',
									borderLeft: { xs: 'unset', lg: '1px dotted black' },
								}}>
								{userData ? userData.name : 'User'}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Stack sx={{ padding: '2rem 3rem 1rem 3rem' }}>
					<Stack gap="1.5rem">
						<Stack sx={{ alignItems: 'flex-start' }}>
							<Heading text={pages[currPage].name} />
						</Stack>
						{/* <MyProfile /> */}
						{/* <Security /> */}
						{/* <SuggestPlant /> */}
						{/* <MyCrops /> */}
						{pages[currPage].component}
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default UserProfile;
