import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%',
					backgroundColor: 'black',
					opacity: '0.3',
					zIndex: 2,
				}}></Box>
			<CircularProgress
				color="success"
				sx={{
					position: 'fixed',
					left: '48.9%',
					top: '50%',

					transform: 'translate(-50%, -50%)',
					zIndex: 9,
				}}
			/>
		</>
	);
};

export default Loading;
