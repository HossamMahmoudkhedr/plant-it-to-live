import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlantCard from '../utils/plantCard';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import PlantDetails from '../utils/plantDetails';
const MyCrops = () => {
	const [plants, setPlants] = useState([]);
	const [selectedPlant, setSelectedPlant] = useState({});
	const [show, setShow] = useState(false);
	const [pagination, setPagination] = useState([]);
	useEffect(() => {
		fetchApi(`userplants?token=${Cookies.get('user')}`).then((data) => {
			setPlants(data.data.data);
			setPagination(
				Array.from(
					{ length: parseInt(data.data['last_page']) },
					(_, i) => i + 1
				)
			);
		});
	}, []);
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
			<Stack
				direction="row"
				justifyContent={'center'}
				gap="1rem"
				alignItems="center"
				margin="2rem 0">
				{pagination.map((el) => (
					<Box
						sx={{
							backgroundColor: '#aaa',
							padding: '1rem',
							cursor: 'pointer',
						}}
						onClick={() => {
							fetchApi(
								`userplants?token=${Cookies.get('user')}&page=${el}`
							).then((data) => {
								setPlants(data.data.data);

								console.log(data.data.total);
							});
						}}>
						{el}
					</Box>
				))}
			</Stack>
		</>
	);
};

export default MyCrops;
