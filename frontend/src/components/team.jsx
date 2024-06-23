import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';

const Team = () => {
	return (
		<Container
			id="team"
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
						width: { xs: '100%', md: '70%', lg: '50%' },
					}}>
					{' '}
					Our dedicated team, consisting of frontend developers, designers,
					backend developers, and a machine learning developer, collaborates to
					create a seamless, visually appealing, and highly functional platform.
					Together, we are committed to providing comprehensive and
					user-friendly solutions for all your planting needs.{' '}
				</Typography>
			</Stack>
		</Container>
	);
};

export default Team;
