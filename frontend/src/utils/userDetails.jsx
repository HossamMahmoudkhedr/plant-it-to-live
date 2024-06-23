import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from './icons';
import Dark from './dark';
import CustomButton from './customButton';
import { fetchApi } from './fetchFromAPI';
import Cookies from 'js-cookie';

const UserDetails = ({ name, email, setShow, id, setRows }) => {
	const handleDeleteUser = () => {
		fetchApi(
			`admin/delete_user?token=${Cookies.get('admin')}&id=${id}`,
			'POST'
		).then((data) => {
			console.log(data);
			fetchApi(`admin/users?token=${Cookies.get('admin')}`)
				.then((data) => {
					console.log(data);
					setRows(data.data.users.data);
					setShow(false);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	};
	return (
		<>
			<Dark setShow={setShow} />
			<Stack
				gap={'1rem'}
				alignItems={'center'}
				sx={{
					padding: '1rem 4rem 1rem 2rem',
					borderRadius: '1.25rem',
					backgroundColor: 'white',
					position: 'fixed',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)',
					zIndex: 9999,
				}}>
				<Stack
					direction="row"
					sx={{
						alignItems: 'center',

						gap: '4rem',
					}}>
					<Stack
						onClick={() => {
							setShow(false);
						}}
						sx={{
							position: 'absolute',
							right: '-15px',
							top: '-15px',
							width: '40px',
							height: '40px',
							borderRadius: '50%',
							justifyContent: 'center',
							alignItems: 'center',
							fill: 'white',
							backgroundColor: 'var(--very-dark-green)',
							cursor: 'pointer',
						}}>
						{icons.closeIcon}
					</Stack>
					<Stack gap="1rem">
						<Stack
							direction="row"
							alignItems="center"
							gap="0.5rem">
							<Typography
								variant="h4"
								sx={{
									fontSize: '1.5rem',
									fontWeight: '700',
									color: 'var(--dark-green)',
								}}>
								Full Name:
							</Typography>
							<Typography
								variant="body1"
								sx={{ fontSize: '1rem', fontWeight: '700' }}>
								{name}
							</Typography>
						</Stack>
						<Stack
							direction="row"
							alignItems="center"
							gap="0.5rem">
							<Typography
								variant="h4"
								sx={{
									fontSize: '1.5rem',
									fontWeight: '700',
									color: 'var(--dark-green)',
								}}>
								Email:
							</Typography>
							<Typography
								variant="body1"
								sx={{ fontSize: '1rem', fontWeight: '700' }}>
								{email}
							</Typography>
						</Stack>
					</Stack>
					<Box>{icons.biggerUser}</Box>
				</Stack>
				<CustomButton
					text={'Delete User'}
					background="#BA1327"
					color="white"
					padding={'1rem 1.5rem'}
					restprops={{ onClick: handleDeleteUser }}
				/>
			</Stack>
		</>
	);
};

export default UserDetails;
