import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';

const MyProfile = () => {
	const [edit, setEdit] = useState(false);
	const [userData, setUserData] = useState({});
	useEffect(() => {
		fetchApi(`user?token=${Cookies.get('user')}`).then((data) => {
			setUserData(data.data);
		});
	}, []);
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setUserData({ ...userData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (let key in userData) {
			formData.append(key, userData[key]);
		}

		fetchApi(`edit?token=${Cookies.get('user')}`, 'POST', formData).then(
			(data) => {
				console.log(data);
				setEdit(false);
				fetchApi(`user?token=${Cookies.get('user')}`).then((data) => {
					setUserData(data.data);
				});
			}
		);
	};
	return (
		<Stack
			gap="1rem"
			onSubmit={handleSubmit}
			component="form"
			encType="multipart/form-data">
			<Stack
				sx={{
					padding: '2rem',
					borderRadius: '1.25rem',
					gap: '2rem',
					backgroundColor: 'white',
				}}>
				<Stack
					direction="row"
					sx={{ justifyContent: 'space-between' }}>
					<Typography
						variant="h3"
						sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
						Personal information
					</Typography>
					<Button
						variant="text"
						onClick={() => {
							setEdit(!edit);
						}}
						sx={{
							textTransform: 'capitalize',
							fontWeight: '600',
							color: '#CFCAB6',
						}}>
						<Box
							component="span"
							sx={{ marginRight: '5px' }}>
							{icons.edit}
						</Box>
						Edit
					</Button>
				</Stack>

				<Grid
					container
					columnSpacing={8}
					rowSpacing={3}>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Full Name"
							name="name"
							placeholder="Full Name"
							type="text"
							background="#fff9e374"
							restprops={{
								value: userData.name,
								onChange: handleInput,
								disabled: !edit,
							}}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Email"
							name="email"
							placeholder="Email"
							type="email"
							background="#fff9e374"
							restprops={{
								value: userData.email,
								onChange: handleInput,
								disabled: !edit,
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Phone Number"
							name="phone"
							placeholder="Phone Number"
							type="text"
							background="#fff9e374"
							restprops={{
								value: userData.phone,
								onChange: handleInput,
								disabled: !edit,
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Gender"
							name="gender"
							placeholder="Gender"
							type="text"
							background="#fff9e374"
							restprops={{
								value: userData.gender,
								onChange: handleInput,
								disabled: !edit,
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="BirthDate"
							name="birthdate"
							placeholder="BirthDate"
							type="date"
							background="#fff9e374"
							restprops={{
								value: userData['b_date'],
								onChange: handleInput,
								disabled: !edit,
							}}
						/>
					</Grid>
				</Grid>
			</Stack>
			<Box
				width="100%"
				sx={{ fontSize: '1.25rem' }}>
				<CustomButton
					background="var(--very-dark-green)"
					text="Save Changes"
					color="white"
					borderradius="0.8rem"
					padding="1rem"
					width="100%"
					restprops={{ type: 'submit' }}
				/>
			</Box>
			<Stack
				direction="row"
				justifyContent="flex-end">
				<Button
					variant="text"
					sx={{
						textTransform: 'capitalize',
						textDecoration: 'underline',
						fontSize: '1rem',
						fontWeight: '600',
						color: 'var(--dark-green)',
					}}>
					Delete Account
				</Button>
			</Stack>
		</Stack>
	);
};

export default MyProfile;
