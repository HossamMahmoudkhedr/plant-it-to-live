import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const StyledStack = styled(Stack)`
	&&:hover div img {
		transform: rotate(5deg) scale(1.25);
	}
`;

const PlantCard = ({ img, name, setAllPlants, restprops }) => {
	const [imageURL, setImageURL] = useState('grape.png');
	// console.log(images);
	useEffect(() => {
		setImageURL('grape.png');
		setTimeout(() => {
			if (require(`../assets/images/${img}`)) {
				setImageURL(img);
			} else {
				setImageURL('grape.png');
			}
		}, 1000);
	}, [setAllPlants, img]);
	// if (img) {
	// 	const reader = new FileReader();
	// 	reader.onload = (e) => {
	// 		setImageURL(e.target.result);
	// 		// setImageURL(img);
	// 	};
	// 	reader.readAsDataURL(img);
	// }
	// useEffect(() => {
	// 	setImageURL(img);
	// }, []);

	return (
		<StyledStack
			gap="1rem"
			alignItems="center"
			{...restprops}
			sx={{ cursor: 'pointer' }}>
			<Box
				sx={{ overflow: 'hidden', borderRadius: '1.25rem', height: '222px' }}>
				{imageURL !== 'grape.png' && (
					<img
						style={{
							objectFit: 'cover !important',
							transition: 'all 0.3s linear',
							width: '100%',
						}}
						src={
							// require('../../../backend/plant_it_to_live/public/plantImges/1718951011.png') ||
							// require('C:/xampp/htdocs/plant-it-to-live/frontend/src/assets/images/') ||

							// require(`../assets/images/${imageURL}`)
							// ? require(`../assets/images/${imageURL}`)
							require(`../assets/images/${imageURL}`)
						}
						alt={name}
						loading="lazy"
					/>
				)}
			</Box>
			<Box>
				<Typography
					variant="body1"
					sx={{ fontWeight: 'bold' }}>
					{name}{' '}
				</Typography>
			</Box>
		</StyledStack>
	);
};

export default PlantCard;
