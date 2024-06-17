import { Grid } from '@mui/material';
import React from 'react';
import PlantCard from '../utils/plantCard';

const MyCrops = () => {
	return (
		<Grid
			container
			spacing={3}>
			<Grid
				item
				xs={12}
				md={4}
				lg={3}>
				<PlantCard
					img="grape.png"
					name="Plant"
				/>
			</Grid>
			<Grid
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
			</Grid>
		</Grid>
	);
};

export default MyCrops;
