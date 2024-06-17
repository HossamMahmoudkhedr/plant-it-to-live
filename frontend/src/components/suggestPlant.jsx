import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';

const SuggestPlant = () => {
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
						Plant Details
					</Typography>
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
							label="Common Name"
							name="commonName"
							placeholder="Common Name"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Scientific Name"
							name="scientificName"
							placeholder="Scientific Name"
							type="text"
							background="#fff9e374"
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
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Sun Light"
							name="sunLight"
							placeholder="Sun Light"
							type="text"
							background="#fff9e374"
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
						/>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Water amount"
							name="waterAmount"
							placeholder="Water Amount"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Fertilizer Amount"
							name="fertilizerAmount"
							placeholder="Fertilizer Amount"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Sun Exposing Per Day"
							name="sunExposing"
							placeholder="Sun Exposing Per Day"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Soil Salinty"
							name="soil"
							placeholder="Soil Salinty"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Appropriate Season"
							name="season"
							placeholder="Appropriate Season"
							type="text"
							background="#fff9e374"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<CustomInput
							label="Plant Image"
							name="image"
							placeholder="Insert a clear image for the plant"
							type="file"
							padding="1.1rem"
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
					text="Submit"
					color="white"
					borderradius="0.8rem"
					padding="1rem"
					width="100%"
				/>
			</Box>
		</Stack>
	);
};

export default SuggestPlant;
