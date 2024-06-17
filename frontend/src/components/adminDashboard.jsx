import {
	Box,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { icons } from '../utils/icons';
import Heading from '../utils/heading';
import Users from './users';
import PlantsDashboard from './plantsDashboard';
import Suggestions from './suggestions';

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

const AdminDashboard = () => {
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
										Users
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
										Plants
									</Typography>
								</StyledBox>
								<StyledBox component="li">
									<Box
										component="span"
										height="30px">
										{icons.suggestion}
									</Box>
									<Typography
										variant="body1"
										sx={{ color: '#CFCAB6' }}>
										Suggestions
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
						justifyContent: 'space-between',
					}}>
					<Heading text={'My profile'} />
					<Stack
						direction="row"
						sx={{ alignItems: 'center', gap: '1rem' }}>
						<Typography
							variant="body1"
							sx={{
								color: 'var(--dark-green)',
								fontWeight: 'bold',
								fontSize: '1.5rem',
							}}>
							Ahmed Saeed
						</Typography>
						<Box
							component="span"
							sx={{ padding: '0rem 1rem 0rem 0rem', height: '50px' }}>
							{icons.user}
						</Box>
					</Stack>
				</Stack>
				<Stack sx={{ padding: '2rem 3rem 1rem 3rem' }}>
					{/* <Users /> */}
					{/* <PlantsDashboard /> */}
					<Suggestions />
				</Stack>
			</Box>
		</Box>
	);
};

export default AdminDashboard;
