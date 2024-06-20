import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlantCard from '../utils/plantCard';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import PlantDetails from '../utils/plantDetails';

const PlantsDashboard = () => {
	const [allPlants, setAllPlants] = useState([]);
	const [show, setShow] = useState(false);
	const [selectedPlant, setSelectedPlant] = useState({});
	useEffect(() => {
		fetchApi(`admin/plants?token=${Cookies.get('admin')}&page=1`).then(
			(data) => {
				console.log(data.data.data);
				setAllPlants(data.data.data);
			}
		);
	}, []);

	const handleClick = (id) => {
		setSelectedPlant({});
		setShow(true);
		fetchApi(`admin/plant?token=${Cookies.get('admin')}&id=${id}`).then(
			(data) => {
				console.log(data);
				setSelectedPlant(data.data);
			}
		);
	};
	return (
		<Container maxWidth="xl">
			{show && (
				<PlantDetails
					setShow={setShow}
					setAllPlants={setAllPlants}
					suggestion={false}
					isUser={false}
					appropriateSeason={selectedPlant['appropriate_season']}
					fertilizer={selectedPlant['fertilizer']}
					fertilizerAmount={selectedPlant['fertilizer_amount']}
					name={selectedPlant['common_name']}
					pruning={selectedPlant['pruning']}
					scientificName={selectedPlant['scientific_name']}
					soilSalinty={selectedPlant['soil_salinty']}
					sunPerDay={selectedPlant['sun_per_day']}
					sunlight={selectedPlant['sunlight']}
					waterAmount={selectedPlant['water_amount']}
					watering={selectedPlant['watering']}
					id={selectedPlant['id']}
				/>
			)}
			<Stack>
				<Grid
					container
					spacing={3}
					padding="0 2rem">
					{/* <Grid
						item
						xs={12}
						md={4}
						lg={3}>
						<PlantCard
							img="green-leaf-texture-leaf-texture-background.jpg"
							name="Plant"
						/>
					</Grid> */}

					{allPlants.map((plant) => (
						<Grid
							key={plant.id}
							item
							xs={12}
							md={4}
							lg={3}>
							<PlantCard
								img="apple.png"
								name={plant.common_name}
								restprops={{
									onClick: () => {
										handleClick(plant.id);
									},
								}}
							/>
						</Grid>
					))}

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
