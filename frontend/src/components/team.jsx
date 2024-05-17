import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';

const Team = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd">
			<Stack sx={{ alignItems: 'center', gap: '2rem' }}>
				<Box>
					<Heading text="Meet the team" />
				</Box>

				<Typography
					variant="body1"
					sx={{
						color: 'var(--dark-gray)',
						textAlign: 'center',
						width: '50%',
					}}>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					modi praesentium deleniti, quo ea cum fugiat! Libero nesciunt dolore,
					aut pariatur doloribus debitis sint illo impedit, ducimus dolorem,
					maxime vel!{' '}
				</Typography>
			</Stack>
		</Container>
	);
};

export default Team;
