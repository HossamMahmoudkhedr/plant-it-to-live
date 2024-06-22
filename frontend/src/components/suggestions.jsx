import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Suggestion from '../utils/suggestion';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import PlantDetails from '../utils/plantDetails';

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);
	const [selectedPlant, setSelectedPlant] = useState({});
	const [show, setShow] = useState(false);
	useEffect(() => {
		fetchApi(`admin/allsuggestions?token=${Cookies.get('admin')}`).then(
			(data) => {
				setSuggestions(data.data.data);
			}
		);
	}, []);
	const handleClick = (id) => {
		console.log(id);
		setSelectedPlant({});
		setShow(true);
		fetchApi(`admin/suggestion?token=${Cookies.get('admin')}&id=${id}`).then(
			(data) => {
				setSelectedPlant(data.data);
			}
		);
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
					isUser={false}
					suggestion={true}
					setSuggestions={setSuggestions}
				/>
			)}
			<Stack gap="1rem">
				{suggestions.length === 0 && (
					<Stack
						width="100%"
						marginTop="2rem"
						direction="row"
						justifyContent="center">
						<Typography
							variant="body1"
							sx={{ fontSize: '1rem' }}>
							There is no suggestions
						</Typography>
					</Stack>
				)}
				{suggestions &&
					suggestions.map((suggestion) => (
						<Suggestion
							user={[suggestion.user.name]}
							plant={suggestion['common_name']}
							restprops={{
								onClick: () => {
									handleClick(suggestion.id);
								},
							}}
						/>
					))}
			</Stack>
		</>
	);
};

export default Suggestions;
