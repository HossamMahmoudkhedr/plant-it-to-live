import { Box, Stack } from '@mui/material';
import React from 'react';

const Signup = () => {
	return (
		<Stack
			sx={{
				alignItems: 'center',
				height: '100vh',
				backgroundImage: `url(${require('../assets/images/tree.png')})`,
				backgroundSize: 'cover',
				backgroundPositionY: '20%',
				position: 'relative',
			}}>
			<Box
				sx={{
					position: 'absolute',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%',
					backgroundColor: 'black',
					opacity: '25%',
				}}></Box>
		</Stack>
	);
};

export default Signup;
