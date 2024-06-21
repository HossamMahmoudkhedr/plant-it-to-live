import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
	&&:hover div img {
		transform: rotate(5deg) scale(1.25);
	}
`;

const PlantCard = ({ img, name, restprops }) => {
	const [imageURL, setImageURL] = useState(
		'../../../backend/plant_it_to_live/public/plantImges/1718951011.png'
	);
	// console.log(img);
	// const reader = new FileReader();
	// if (img) {
	// 	reader.onload = (e) => {
	// 		setImageURL(e.target.result);
	// 	};
	// }
	// reader.readAsDataURL(img);

	return (
		<StyledStack
			gap="1rem"
			alignItems="center"
			{...restprops}
			sx={{ cursor: 'pointer' }}>
			<Box
				sx={{ overflow: 'hidden', borderRadius: '1.25rem', height: '222px' }}>
				<img
					width="100%"
					style={{
						objectFit: 'cover !important',
						transition: 'all 0.3s linear',
					}}
					src={
						// require('../../../backend/plant_it_to_live/public/plantImges/1718951011.png') ||
						// require('C:/xampp/htdocs/plant-it-to-live/frontend/src/assets/images/') ||
						require('../assets/images/apple.png')
					}
					alt={name}
					loading="lazy"
				/>
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
