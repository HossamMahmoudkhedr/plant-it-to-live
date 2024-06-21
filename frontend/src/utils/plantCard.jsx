import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
	&&:hover div img {
		transform: rotate(5deg) scale(1.25);
	}
`;

const PlantCard = ({ img, name, restprops }) => {
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
					src={require(`../assets/images/${img}`)}
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
