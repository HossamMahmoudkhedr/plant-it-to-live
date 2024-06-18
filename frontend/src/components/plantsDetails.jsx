import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import PlantCard from '../utils/plantCard';
import PlantDetails from '../utils/plantDetails';

const PlantsDetails = () => {
	return (
		<Container maxWidth="xl">
			{/* <PlantDetails
				isUser={true}
				text={'Save to my profile'}
			/> */}
			<Stack
				direction="row"
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '1rem 2rem',
				}}>
				<Box sx={{ width: '10%' }}>
					<img
						style={{ objectFit: 'cover' }}
						src={require(`../assets/images/plant-it-to-live-high-resolution-logo-icon 1.png`)}
						alt=""
					/>
				</Box>
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems="center"
					gap={{ xs: '0.5rem', md: '1rem' }}>
					<Typography
						variant="body1"
						sx={{ fontWeight: 'bold', color: 'var(--very-dark-green)' }}>
						Ahmed Saeed
					</Typography>
					<Box>{icons.user}</Box>
				</Stack>
			</Stack>
			<Stack
				alignItems="center"
				gap="1.5rem">
				<Typography
					variant="h4"
					sx={{ fontWeight: 'bold' }}>
					Choose a plant
				</Typography>
				<Stack
					direction="row"
					width={{ xs: '90%', md: '70%', lg: '30%' }}>
					<CustomInput
						placeholder={'Search for a plant'}
						width="100%"
					/>
				</Stack>
				<Grid
					container
					spacing={3}
					padding="0 2rem">
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<PlantCard
							img="green-leaf-texture-leaf-texture-background.jpg"
							name="Plant"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<PlantCard
							img="kilarov-zaneit-LSp0afmu7kk-unsplash.jpg"
							name="Plant"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<PlantCard
							img="orange.jpg"
							name="Plant"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<PlantCard
							img="orange2.jpg"
							name="Plant"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<PlantCard
							img="green-house.jpg"
							name="Plant"
						/>
					</Grid>
				</Grid>
			</Stack>
		</Container>
	);
};

export default PlantsDetails;
