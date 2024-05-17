import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{ display: 'flex', justifyContent: 'center' }}>
			<Stack
				sx={{
					backgroundColor: 'var(--light-green)',
					borderRadius: '2rem',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
					height: '400px',
					margin: '3rem 0 1rem 0',
					width: '97%',
				}}>
				<Typography
					variant="body1"
					color={'white'}>
					footer
				</Typography>
			</Stack>
		</Container>
	);
};

export default Footer;
