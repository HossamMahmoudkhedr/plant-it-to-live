import { Box, Stack } from '@mui/material';
import React from 'react';

const Signup = () => {
	return (
		<Stack
			sx={{
				alignItems: 'center',
				height: '100vh',
				backgroundImage: `url(${require('../assets/images/toppng.com-trees-fog-field-horizon-grass-minimalism-2560x1080.jpg')})`,
				backgroundSize: 'cover',
				backgroundPosition: 'right',
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
					opacity: '35%',
					zIndex: '0',
				}}></Box>
		</Stack>
	);
};

export default Signup;
