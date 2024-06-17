import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import { icons } from '../utils/icons';
import CustomButton from '../utils/customButton';
import Result from '../utils/result';

const DetectDiseases = () => {
	return (
		<>
			<Result
				title="Disease name"
				desc="test"
			/>
			<Container maxWidth="lg">
				<Stack
					sx={{ alignItems: 'flex-start', marginTop: '2rem', gap: '1.5rem' }}>
					<Heading text="Upload Image" />
					<Stack
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#4caf50a3',
							width: '100%',
							height: '70vh',
							borderRadius: '0.8rem',
							border: '2px dotted gray',
						}}>
						<Stack sx={{ alignItems: 'center', gap: '1rem' }}>
							<Box component="span">{icons.images}</Box>
							<Stack sx={{ gap: '1rem', alignItems: 'center' }}>
								<Typography
									variant="body1"
									sx={{
										fontSize: '1.5rem',
										fontWeight: '600',
										color: 'white',
										textAlign: 'center',
										width: '55%',
									}}>
									Drag and drop an image of a plant leaf to process
								</Typography>
								<Typography
									variant="body1"
									sx={{
										fontSize: '0.8rem',
										color: 'white',
										textAlign: 'center',
									}}>
									Allowed Formats: JPG, JPEG, PNG
								</Typography>
							</Stack>
						</Stack>
					</Stack>
					<Box sx={{ fontSize: '1.5rem', width: '100%' }}>
						<CustomButton
							background="var(--very-dark-green)"
							color="white"
							width="100%"
							padding="0.5rem"
							text="Upload Images"
							borderradius="0.8rem"
							icHeight={'30px'}
							icon={icons.upload}
						/>
					</Box>
				</Stack>
			</Container>
		</>
	);
};

export default DetectDiseases;
