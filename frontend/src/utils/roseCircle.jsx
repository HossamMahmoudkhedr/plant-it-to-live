import { Box } from '@mui/material';
import React from 'react';

const RoseCircle = ({ width }) => {
	return (
		<Box
			sx={{
				width: width,
				height: width,
				backgroundColor: 'var(--rose)',
				filter: 'blur(100px)',
				borderRadius: '50%',
				opacity: '0.7',
				position: 'absolute',
				zIndex: '-1',
			}}></Box>
	);
};

export default RoseCircle;
