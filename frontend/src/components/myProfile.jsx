import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import CustomSelect from '../utils/customSelect';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
	const [edit, setEdit] = useState(false);
	const [userData, setUserData] = useState({});
	const [changedImage, setChangedImage] = useState(false);
	const navigate = useNavigate();
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const day = ('0' + date.getDate()).slice(-2);
		return `${year}-${month}-${day}`;
	};

	useEffect(() => {
		fetchApi(`user?token=${Cookies.get('user')}`).then((data) => {
			const formattedDate = formatDate(data.data.b_date);

			setUserData({ ...data.data, b_date: formattedDate });
		});
	}, []);
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (name === 'b_date') {
			value = formatDate(value);
		}
		console.log(value);
		setUserData({ ...userData, [name]: value });
	};
	const handleUploadImage = (e) => {
		const file = e.target.files[0];
		setUserData({ ...userData, [e.target.name]: file });
		setChangedImage(true);
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				console.log(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (let key in userData) {
			if (key !== 'picture') {
				formData.append(key, userData[key]);
			}
		}
		if (userData['picture'] && changedImage) {
			formData.append('picture', userData['picture']);
			setChangedImage(false);
		}

		fetchApi(`edit?token=${Cookies.get('user')}`, 'POST', formData).then(
			(data) => {
				console.log(data);
				setEdit(false);
				fetchApi(`user?token=${Cookies.get('user')}`).then((data) => {
					const formattedDate = formatDate(data.data.b_date);
					setUserData({ ...data.data, b_date: formattedDate });
				});
			}
		);
	};

	const handleDeleteUser = () => {
		fetchApi(`delete?token=${Cookies.get('user')}`).then((data) => {
			console.log(data);
			Cookies.remove('user');
			navigate('/');
		});
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
							color: edit ? 'black' : '#CFCAB6',
						}}>
						<Box
							component="span"
							sx={{ marginRight: '5px', stroke: edit ? 'black' : '#CFCAB6' }}>
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
						<CustomSelect
							label="Gender"
							labelcolor="white"
							name="gender"
							staticOption={{
								name: 'Choose your gender',
								value: 'gender',
							}}
							options={[
								{ name: 'Male', value: 'male' },
								{ name: 'Female', value: 'female' },
							]}
							background="#fff9e374"
							restprops={{ onChange: handleInput, value: userData.gender }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="BirthDate"
							name="b_date"
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
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Picture"
							name="picture"
							placeholder="Upload your image"
							type="file"
							padding="1.1rem"
							background="#fff9e374"
							restprops={{
								accept: 'image/*',
								onChange: handleUploadImage,
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
					restprops={{ type: 'submit', disabled: !edit }}
				/>
			</Box>
			<Stack
				direction="row"
				justifyContent="flex-end">
				<Button
					variant="text"
					onClick={handleDeleteUser}
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
