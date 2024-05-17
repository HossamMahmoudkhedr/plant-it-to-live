import { Box } from '@mui/material';
import React from 'react';

const RoseCircle = ({ width, left, top, right, bottom }) => {
	return (
		<Box
			sx={{
				width: width,
				height: width,
				top: top || 'unset',
				left: left || 'unset',
				right: right || 'unset',
				bottom: bottom || 'unset',
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
