import { Box, Container, Stack, Typography } from '@mui/material';
import Heading from '../utils/heading';
import React from 'react';
import { icons } from '../utils/icons';
import RoseCircle from '../utils/roseCircle';

const Aboutus = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd">
			<Stack sx={{ alignItems: 'center', gap: '2rem' }}>
				<Box sx={{ position: 'relative' }}>
					<Box
						component="span"
						sx={{
							position: 'absolute',
							top: '-1rem',
							left: { xs: '-5rem', md: '-10rem' },
						}}>
						{icons.stars}
					</Box>
					<Heading text={'About Us'} />
				</Box>

				<Typography
					variant="body1"
					sx={{
						color: 'var(--gray)',
						textAlign: 'center',
						width: { xs: '100%', md: '60%', lg: '33.5%' },
						lineHeight: '1.8',
						position: 'relative',
					}}>
					<Box
						component={'span'}
						sx={{
							position: 'absolute',
							bottom: { xs: '-5rem', lg: '-1rem' },
							right: { xs: '1rem', lg: '-7rem' },
						}}>
						{icons.leafs}
					</Box>
					<RoseCircle
						top="-7rem"
						right={{ xs: '2rem', lg: '-17rem' }}
						width="226px"
					/>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint.
				</Typography>
			</Stack>
		</Container>
	);
};

export default Aboutus;
