import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';

const SuggestPlant = ({ admin }) => {
	const formData = new FormData();
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (formData.has(name)) {
			formData.set(name, value);
		} else {
			formData.append(name, value);
		}
	};

	const handleImage = (e) => {
		const file = e.target.files[0];
		console.log(file);
		if (file) {
			formData.append('img', file);
			const reader = new FileReader();
			reader.onload = (e) => {
				console.log(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		fetchApi(`admin/addplant?token=${Cookies.get('admin')}`, 'POST', formData)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Stack
			gap="1rem"
			component="form"
			onSubmit={handleSubmit}
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
						Plant Details
					</Typography>
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
							label="Common Name"
							name="common_name"
							placeholder="Common Name"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Scientific Name"
							name="scientific_name"
							placeholder="Scientific Name"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Watering"
							name="watering"
							placeholder="Watering"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Fertilizer"
							name="fertilizer"
							placeholder="Fertilizer"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Sun Light"
							name="sunlight"
							placeholder="Sun Light"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Pruning"
							name="pruning"
							placeholder="Pruning"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Water amount"
							name="water_amount"
							placeholder="Water Amount"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Fertilizer Amount"
							name="fertilizer_amount"
							placeholder="Fertilizer Amount"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Sun Exposing Per Day"
							name="sun_per_day"
							placeholder="Sun Exposing Per Day"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Soil Salinty"
							name="soil_salinty"
							placeholder="Soil Salinty"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Appropriate Season"
							name="appropriate_season"
							placeholder="Appropriate Season"
							type="text"
							background="#fff9e374"
							restprops={{ onChange: handleInput }}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Plant Image"
							name="img"
							placeholder="Insert a clear image for the plant"
							type="file"
							padding="1.1rem"
							background="#fff9e374"
							restprops={{ onChange: handleImage, accept: 'image/*' }}
						/>
					</Grid>
				</Grid>
			</Stack>
			<Box
				width="100%"
				sx={{ fontSize: '1.25rem' }}>
				<CustomButton
					background="var(--very-dark-green)"
					text="Submit"
					color="white"
					borderradius="0.8rem"
					padding="1rem"
					width="100%"
					restprops={{ type: 'submit' }}
				/>
			</Box>
		</Stack>
	);
};

export default SuggestPlant;
