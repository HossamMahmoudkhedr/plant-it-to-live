import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import PlantCard from '../utils/plantCard';
import PlantDetails from '../utils/plantDetails';
import { useScroll } from 'framer-motion';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const PlantsDetails = () => {
	const [allPlants, setAllPlants] = useState([]);
	const [plants, setPlants] = useState([]);
	const [userData, setUserData] = useState({});
	const [selectedPlant, setSelectedPlant] = useState({});
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (Cookies.get('user')) {
			fetchApi(`user?token=${Cookies.get('user')}`)
				.then((data) => {
					console.log(data);
					setUserData(data.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		fetchApi('allplants').then((data) => {
			setPlants(data.data.data);
			setAllPlants(data.data.data);
		});
	}, []);

	const handleClick = (id) => {
		setSelectedPlant({});
		setShow(true);
		fetchApi(`plant?id=${id}`).then((data) => {
			setSelectedPlant(data.data);
		});
	};

	const handleSearch = (e) => {
		let value = e.target.value;
		if (value === '') {
			setPlants(allPlants);
		} else {
			setPlants(
				plants.filter((plant) =>
					plant['common_name'].toLowerCase().includes(value.toLowerCase())
				)
			);
		}
	};
	return (
		<Container maxWidth="xl">
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
					isUser={true}
				/>
			)}
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
				<Link
					to={'/userProfile'}
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '1rem',
						alignItems: 'center',
					}}>
					<Typography
						variant="body1"
						sx={{ fontWeight: 'bold', color: 'var(--very-dark-green)' }}>
						{userData.name}
					</Typography>
					<Box>{icons.avatar}</Box>
				</Link>
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
						restprops={{ onChange: handleSearch }}
					/>
				</Stack>
				<Grid
					container
					spacing={3}
					padding="0 2rem">
					{plants.length === 0 && (
						<Stack
							marginTop="2rem"
							width="100%"
							direction="row"
							justifyContent="center">
							<Typography variant="body1">There are no plants</Typography>
						</Stack>
					)}
					{plants.map((plant) => (
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
					{/* <Grid
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
					</Grid> */}
				</Grid>
			</Stack>
		</Container>
	);
};

export default PlantsDetails;
