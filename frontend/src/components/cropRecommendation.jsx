import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';

const CropRecommendation = () => {
	return (
		<Stack
			sx={{
				alignItems: 'center',
				backgroundImage: `url(${require('../assets/images/plant-background.png')})`,
				backgroundSize: '80%',

				backgroundPositionY: '80%',
				backgroundPositionX: '101%',
				backgroundRepeat: 'no-repeat',
				// backgroundAttachment: 'fixed',
				// backgroundPosition: { xs: '60%', lg: 'bottom' },
			}}>
			<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
				<Box
					sx={{
						position: 'absolute',
						left: '0',
						top: '0',
						width: '100%',
						height: '100%',
						backgroundColor: 'black',
						opacity: '10%',
						zIndex: '0',
					}}></Box>
				<Container
					maxWidth="lg"
					sx={{ padding: '3rem 0' }}>
					<Stack sx={{ position: 'relative', zIndex: 1, gap: '1rem' }}>
						<Stack sx={{ gap: '0.5rem' }}>
							<Typography
								variant="h3"
								sx={{
									color: 'var(--dark-green)',
									fontSize: '1.75rem',
									fontWeight: 'bold',
								}}>
								Crop Recommendation
							</Typography>
							<Typography
								variant="body1"
								sx={{ color: '#AAAAAA' }}>
								Enter the details of your environment below
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
									label="Nitrogen"
									labelcolor="var(--dark-green)"
									name="nitrogen"
									placeholder="Enter Nitrogen"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<CustomInput
									label="Phosphorus"
									labelcolor="var(--dark-green)"
									name="phosphorus"
									placeholder="Enter Phosphorus"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<CustomInput
									label="Potassium"
									labelcolor="var(--dark-green)"
									name="potassium"
									placeholder="Enter Potassium"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<CustomInput
									label="Temperature"
									labelcolor="var(--dark-green)"
									name="temperature"
									placeholder="Enter Temperature in C°"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<CustomInput
									label="Humidity"
									labelcolor="var(--dark-green)"
									name="humidity"
									placeholder="Enter Humidity in %"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<CustomInput
									label="pH"
									labelcolor="var(--dark-green)"
									name="ph"
									placeholder="Enter pH value"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
							<Grid
								item
								xs={12}>
								<CustomInput
									label="Rainfall"
									labelcolor="var(--dark-green)"
									name="rainfall"
									placeholder="Enter Rainfall in mm"
									type="text"
									background="#fff9e374"
								/>
							</Grid>
						</Grid>
						<Stack
							alignItems={'center'}
							gap="1rem"
							margin="2.5rem 0 1rem 0">
							<Box
								sx={{ fontSize: '1.5rem', fontWeight: 'bold', width: '100%' }}>
								<CustomButton
									background="var(--very-dark-green)"
									borderradius="0.75rem"
									color="white"
									padding="0.7rem 0"
									text="Get recommendation"
									width="100%"
								/>
							</Box>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</Stack>
	);
};

export default CropRecommendation;
