import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlantCard from '../utils/plantCard';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import PlantDetails from '../utils/plantDetails';
const MyCrops = () => {
	const [plants, setPlants] = useState([]);
	const [selectedPlant, setSelectedPlant] = useState({});
	const [show, setShow] = useState(false);
	useEffect(() => {
		fetchApi(`userplants?token=${Cookies.get('user')}`).then((data) => {
			setPlants(data.data.data);
		});
	}, [plants]);
	const handleClick = (id) => {
		setSelectedPlant({});
		setShow(true);
		fetchApi(`plant?id=${id}`).then((data) => {
			setSelectedPlant(data.data);
		});
	};
	return (
		<>
			{show && (
				<PlantDetails
					setShow={setShow}
					img={selectedPlant.img}
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
					setAllPlants={setPlants}
					isUser={true}
				/>
			)}
			<Grid
				container
				spacing={3}>
				{plants &&
					plants.map((plant) => (
						<Grid
							item
							xs={12}
							md={4}
							lg={3}>
							<PlantCard
								img={plant.img}
								name={plant['common_name']}
								restprops={{
									onClick: () => {
										handleClick(plant.id);
									},
								}}
							/>
						</Grid>
					))}
				{plants.length === 0 && (
					<Stack
						direction="row"
						justifyContent="center"
						marginTop="2rem"
						width="100%">
						<Typography variant="body1">
							You haven't added any plants yet!
						</Typography>
					</Stack>
				)}
				{/* <Grid
				item
				xs={12}
				md={4}
				lg={3}>
				<PlantCard
					img="apple.png"
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
			</Grid> */}
			</Grid>
		</>
	);
};

export default MyCrops;
