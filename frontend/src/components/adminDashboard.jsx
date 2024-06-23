import {
	Box,
	Button,
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
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { icons } from '../utils/icons';
import Heading from '../utils/heading';
import Users from './users';
import PlantsDashboard from './plantsDashboard';
import Suggestions from './suggestions';
import PlantDetails from '../utils/plantDetails';
import UserDetails from '../utils/userDetails';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import Security from './security';

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

{
	/* <Users />; */
}
{
	/* <PlantsDashboard /> */
}
{
	/* <Suggestions /> */
}

const pages = [
	{ name: 'Users', component: <Users /> },
	{ name: 'Plants', component: <PlantsDashboard /> },
	{ name: 'Suggestions', component: <Suggestions /> },
	{ name: 'Security', component: <Security isUser={false} /> },
];

const AdminDashboard = () => {
	const [showSide, setShowSide] = useState(false);
	const [adminData, setAdminData] = useState({});
	const [currPage, setCurrPage] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		if (!Cookies.get('admin')) {
			navigate('/adminLogin');
		}
		fetchApi(`admin/home?token=${Cookies.get('admin')}`, 'GET')
			.then((data) => {
				setAdminData(data.data);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleLogout = () => {
		fetchApi(`admin/logout?token=${Cookies.get('admin')}`, 'GET').then(
			(data) => {
				console.log(data);
				Cookies.remove('admin');
				navigate('/adminLogin');
			}
		);
	};
	return (
		<Box>
			{/* <PlantDetails suggestion={true} /> */}
			{/* <UserDetails /> */}
			<Box
				sx={{
					position: 'absolute',
					left: '20px',
					top: '20px',
					zIndex: '9999',
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
					left: 0,
					height: '100vh',
					// position: { xs: 'absolute', lg: 'unset' },
					left: { xs: 0, lg: 'unset' },
					transform: {
						xs: `${showSide ? 'translateX(0%)' : 'translateX(-180%)'}`,
						lg: 'unset',
					},
					zIndex: 999,
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
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(0);
									}}>
									<Box
										component="span"
										sx={{
											fill: currPage === 0 ? 'var(--dark-green)' : '#CFCAB6',
										}}
										height="30px">
										{icons.user}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{
											color: currPage === 0 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										Users
									</Typography>
								</StyledBox>
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(1);
									}}>
									<Box
										component="span"
										sx={{
											fill: currPage === 1 ? 'var(--dark-green)' : '#CFCAB6',
											stroke: currPage === 1 ? 'var(--dark-green)' : '#CFCAB6',
										}}
										height="30px">
										{icons.crop}
									</Box>{' '}
									<Typography
										variant="body1"
										sx={{
											color: currPage === 1 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										Plants
									</Typography>
								</StyledBox>
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(2);
									}}>
									<Box
										component="span"
										sx={{
											// fill: currPage === 2 ? 'var(--dark-green)' : '#CFCAB6',
											stroke: currPage === 2 ? 'var(--dark-green)' : '#CFCAB6',
										}}
										height="30px">
										{icons.suggestion}
									</Box>
									<Typography
										variant="body1"
										sx={{
											color: currPage === 2 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										Suggestions
									</Typography>
								</StyledBox>
								<StyledBox
									component="li"
									onClick={() => {
										setCurrPage(3);
									}}>
									<Box
										component="span"
										sx={{
											// fill: currPage === 2 ? 'var(--dark-green)' : '#CFCAB6',
											stroke: currPage === 3 ? 'var(--dark-green)' : '#CFCAB6',
										}}
										height="30px">
										{icons.security}
									</Box>
									<Typography
										variant="body1"
										sx={{
											color: currPage === 3 ? 'var(--dark-green)' : '#CFCAB6',
										}}>
										Security
									</Typography>
								</StyledBox>
							</Stack>
						</Stack>
					</Stack>
					<Button
						onClick={handleLogout}
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							width: 'fit-content',
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
					direction={{ xs: 'column-reverse', lg: 'row' }}
					sx={{
						alignItems: 'center',
						padding: '2rem',
						justifyContent: 'space-between',
						gap: { xs: '1rem', lg: 'unset' },
					}}>
					<Heading text={pages[currPage].name} />
					<Stack
						direction={{ xs: 'column-reverse', lg: 'row' }}
						sx={{
							alignItems: 'center',
							gap: '1rem',
						}}>
						<Typography
							variant="body1"
							sx={{
								color: 'var(--dark-green)',
								fontWeight: 'bold',
								fontSize: '1.5rem',
							}}>
							{adminData.name || 'Admin'}
						</Typography>
						<Box
							component="span"
							sx={{ padding: '0rem 1rem 0rem 0rem', height: '50px' }}>
							{adminData.picture || icons.avatar}
						</Box>
					</Stack>
				</Stack>
				<Stack sx={{ padding: '2rem 3rem 1rem 3rem' }}>
					{pages[currPage].component}
				</Stack>
			</Box>
		</Box>
	);
};

export default AdminDashboard;
