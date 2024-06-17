import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from '../utils/heading';
import MyProfile from './myProfile';
import Security from './security';
import SuggestPlant from './suggestPlant';
import MyCrops from './myCrops';

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
	return (
		<Box>
			<Box
				sx={{
					width: '20%',
					float: 'left',
					backgroundColor: 'white',
					position: 'fixed',
					left: 0,
					height: '100vh',
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
							<Box>
								<img
									src={require('../assets/images/plant-it-to-live-high-resolution-logo-icon 1.png')}
									alt="Plant it to live"
								/>
							</Box>
						</Stack>
						<Stack sx={{ alignItems: 'center' }}>
							<Stack
								component="ul"
								gap="1.5rem">
								<StyledBox component="li">
									<Box
										component="span"
										height="30px">
										{icons.avatar}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{ color: 'var(--dark-green)' }}>
										My profile
									</Typography>
								</StyledBox>
								<StyledBox component="li">
									<Box
										component="span"
										height="30px">
										{icons.security}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{ color: '#CFCAB6' }}>
										Security
									</Typography>
								</StyledBox>
								<StyledBox component="li">
									<Box
										component="span"
										height="30px">
										{icons.crop}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{ color: '#CFCAB6' }}>
										My crops
									</Typography>
								</StyledBox>
								<StyledBox component="li">
									<Box
										component="span"
										height="30px">
										{icons.help}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{ color: '#CFCAB6' }}>
										Help Us
									</Typography>
								</StyledBox>
							</Stack>
						</Stack>
					</Stack>
					<Link
						to="/"
						style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
						<Box
							component="span"
							height="30px">
							{icons.logout}
						</Box>{' '}
						<Typography
							variant="body1"
							sx={{ color: '#CFCAB6', fontWeight: 'bold', fontSize: '1.5rem' }}>
							Log out
						</Typography>
					</Link>
				</Stack>
			</Box>
			<Box sx={{ width: '80%', float: 'right' }}>
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
						<Box
							component="span"
							sx={{ padding: '0rem 1rem 0rem 0rem', height: '35px' }}>
							{icons.home}
						</Box>
						<Typography
							variant="body1"
							sx={{
								color: 'var(--dark-green)',
								fontWeight: 'bold',
								padding: '0rem 0rem 0rem 1rem',
								borderLeft: '1px dotted black',
							}}>
							Ahmed Saeed
						</Typography>
					</Stack>
				</Stack>
				<Stack sx={{ padding: '2rem 3rem 1rem 3rem' }}>
					<Stack gap="1.5rem">
						<Stack sx={{ alignItems: 'flex-start' }}>
							<Heading text={'My profile'} />
						</Stack>
						{/* <MyProfile /> */}
						{/* <Security /> */}
						{/* <SuggestPlant /> */}
						<MyCrops />
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default UserProfile;
