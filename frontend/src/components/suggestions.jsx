import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Suggestion from '../utils/suggestion';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import PlantDetails from '../utils/plantDetails';
import CustomButton from '../utils/customButton';
import axios from 'axios';

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);
	const [selectedPlant, setSelectedPlant] = useState({});
	const [pagination, setPagination] = useState([]);
	const [show, setShow] = useState(false);
	useEffect(() => {
		fetchApi(`admin/allsuggestions?token=${Cookies.get('admin')}`).then(
			(data) => {
				setSuggestions(data.data.data);
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
			<Box sx={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 9 }}>
				<CustomButton
					background="var(--very-dark-green)"
					borderradius="0.5rem"
					color="white"
					padding="0.8rem 2rem "
					text={'Print'}
					restprops={{
						onClick: () => {
							axios({
								url: `http://127.0.0.1:8000/api/admin/exportsuggest?token=${Cookies.get(
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
									a.download = 'Suggestions.csv'; // Change the file name and extension as needed
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
					suggestions.map(
						(suggestion) =>
							suggestion.approved === 0 && (
								<Suggestion
									user={[suggestion.user.name]}
									plant={suggestion['common_name']}
									restprops={{
										onClick: () => {
											handleClick(suggestion.id);
										},
									}}
								/>
							)
					)}
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
								`admin/allsuggestions?token=${Cookies.get('admin')}&page=${el}`
							).then((data) => {
								setSuggestions(data.data.data);

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

export default Suggestions;
