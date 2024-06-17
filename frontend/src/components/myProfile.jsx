import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';

const MyProfile = () => {
	return (
		<Stack gap="1rem">
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
					component="form"
					columnSpacing={8}
					rowSpacing={3}>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="First Name"
							name="fname"
							placeholder="First Name"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Last Name"
							name="lname"
							placeholder="Last Name"
							type="text"
							background="#fff9e374"
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
