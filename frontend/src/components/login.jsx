import { Box, Stack } from '@mui/material';
import React from 'react';

const Login = () => {
	return (
		<Stack
			direction="row"
			sx={{
				height: '100vh',
				backgroundImage: `url(${require('../assets/images/smily-pot.png')})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				justifyContent: 'flex-end',
			}}>
			<Box
				sx={{
					background: 'var(--body)',
					marginTop: '1.5rem',
					height: 'calc(100vh-1.5rem)',
					width: '50%',
					borderRadius: '2.5rem 0 0 2.5rem',
				}}></Box>
		</Stack>
	);
};

export default Login;
