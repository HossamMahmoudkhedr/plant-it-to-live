import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlantCard from '../utils/plantCard';
import { icons } from '../utils/icons';
import CustomInput from '../utils/customInput';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import PlantDetails from '../utils/plantDetails';
import Dark from '../utils/dark';
import SuggestPlant from './suggestPlant';
import CustomButton from '../utils/customButton';
import axios from 'axios';

const PlantsDashboard = () => {
	const [allPlants, setAllPlants] = useState([]);
	const [show, setShow] = useState(false);
	const [showAddPlant, setShowAddPlant] = useState(false);
	const [selectedPlant, setSelectedPlant] = useState({});
	const [pagination, setPagination] = useState([]);
	useEffect(() => {
		fetchApi(`admin/plants?token=${Cookies.get('admin')}&page=1`).then(
			(data) => {
				console.log(data.data.data);
				setAllPlants(data.data.data);
				setPagination(
					Array.from(
						{ length: parseInt(data.data['last_page']) },
						(_, i) => i + 1
					)
				);
			}
		);
	}, []);

	const handleClick = (id) => {
		setSelectedPlant({});
		setShow(true);
		fetchApi(`admin/plant?token=${Cookies.get('admin')}&id=${id}`).then(
			(data) => {
				console.log(data.data);
				setSelectedPlant(data.data);
			}
		);
	};

	const handleAddPlant = () => {
		setShowAddPlant(true);
	};
	return (
		<>
			<Box sx={{ position: 'fixed', right: '10px', bottom: '10px', zIndex: 9 }}>
				<CustomButton
					background="var(--very-dark-green)"
					borderradius="0.5rem"
					color="white"
					padding="0.8rem 2rem "
					text={'Print'}
					restprops={{
						onClick: () => {
							axios({
								url: `http://127.0.0.1:8000/api/admin/export?token=${Cookies.get(
									'admin'
								)}`,
								method: 'GET',
								responseType: 'blob', // Important for file download
							})
								.then((response) => {
									const url = window.URL.createObjectURL(
										new Blob([response.data])
									);
									const a = document.createElement('a');
									a.style.display = 'none';
									a.href = url;
									a.download = 'Plants.csv'; // Change the file name and extension as needed
									document.body.appendChild(a);
									a.click();
									window.URL.revokeObjectURL(url);
									document.body.removeChild(a);
								})
								.catch((error) => {
									console.error('Error downloading the file:', error);
								});
						},
					}}
				/>
			</Box>
			<Container maxWidth="xl">
				{showAddPlant && (
					<>
						<Dark setShow={setShowAddPlant} />
						<Box
							sx={{
								position: 'absolute',
								left: '50%',
								top: { xs: '105%', lg: '55%' },
								transform: 'translate(-50%, -50%)',
								width: 'fit-contnet',
								height: 'fit-contnet',
								zIndex: 9999,
								margin: '8rem 0',
							}}>
							<Box
								onClick={() => {
									setShowAddPlant(false);
								}}
								component="span"
								sx={{
									position: 'absolute',
									right: '-10px',
									top: '-10px',
									fill: 'white',
									background: 'var(--very-dark-green)',
									borderRadius: '50%',
									width: '40px',
									height: '40px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									cursor: 'pointer',
								}}>
								{icons.closeIcon}
							</Box>
							<Box
								sx={{
									padding: '1rem',
									backgroundColor: 'var(--body)',
									borderRadius: '2rem',
								}}>
								<SuggestPlant
									admin={true}
									setAllPlants={setAllPlants}
									setShowAddPlant={setShowAddPlant}
								/>
							</Box>
						</Box>
					</>
				)}
				{show && (
					<PlantDetails
						setShow={setShow}
						setAllPlants={setAllPlants}
						suggestion={false}
						isUser={false}
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

						{allPlants &&
							allPlants.map((plant) => {
								return (
									plant &&
									plant.img && (
										<Grid
											key={plant.id}
											item
											xs={12}
											md={4}
											lg={3}>
											<PlantCard
												img={plant.img}
												// img={'apple.png'}
												setAllPlants={setAllPlants}
												name={plant['common_name']}
												restprops={{
													onClick: () => {
														handleClick(plant.id);
													},
												}}
											/>
										</Grid>
									)
								);
							})}

						<Grid
							item
							xs={12}
							md={4}
							lg={3}>
							<Button
								variant="contained"
								onClick={handleAddPlant}
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
									height: '250px',
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
									`admin/plants?token=${Cookies.get('admin')}&page=${el}`
								).then((data) => {
									setAllPlants(data.data.data);

									console.log(data.data.total);
								});
							}}>
							{el}
						</Box>
					))}
				</Stack>
			</Container>
		</>
	);
};

export default PlantsDashboard;
