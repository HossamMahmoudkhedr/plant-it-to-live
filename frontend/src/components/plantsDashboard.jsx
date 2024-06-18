import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import PlantCard from '../utils/plantCard';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';

const PlantsDashboard = () => {
	return (
		<Container maxWidth="xl">
			{/* <PlantDetails
				isUser={true}
				text={'Save to my profile'}
			/> */}

			<Stack>
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
					<Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<Button
							variant="contained"
							sx={{
								backgroundColor: 'white',
								width: '100%',
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								color: 'black',
								gap: '1rem',
								stroke: 'black',
								'&:hover': {
									backgroundColor: 'var(--very-dark-green)',
									color: 'white',
									stroke: 'white',
								},
							}}>
							<Box
								component="span"
								sx={{ stroke: 'inherit', color: 'inherit' }}>
								{icons.plus}
							</Box>
							<Box
								component="span"
								sx={{
									color: 'inherit',
									textTransform: 'capitalize',
									fontSize: '1.25rem',
								}}>
								Add new plant
							</Box>
						</Button>
					</Grid>
				</Grid>
			</Stack>
		</Container>
	);
};

export default PlantsDashboard;
