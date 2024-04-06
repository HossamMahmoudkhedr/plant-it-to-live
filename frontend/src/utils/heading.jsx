import { Box, Typography } from '@mui/material';
import React from 'react';

const Heading = ({ text }) => {
	return (
		<Typography
			variant="h2"
			sx={{
				fontSize: '2rem',
				color: 'var(--dark-green)',
				fontWeight: 'bold',
				textAlign: 'center',
			}}>
			{text}
		</Typography>
	);
};

export default Heading;
