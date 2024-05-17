import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import CustomButton from '../utils/customButton';

const Features = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd">
			<Stack sx={{ marginBottom: '2.5rem' }}>
				<Heading text="Features" />
			</Stack>
			<Stack
				direction="row"
				spacing={3}>
				<Grid
					container
					spacing={3}>
					<Grid
						item
						xs={12}>
						<Stack
							direction="row"
							sx={{
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: '1.25rem 1.75rem',
								borderRadius: '1.5rem',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
							}}>
							<Stack sx={{ gap: '1rem', width: '50%' }}>
								<Typography
									variant="h5"
									sx={{ fontWeight: 'bold' }}>
									Title
								</Typography>
								<Typography
									variant="body1"
									sx={{ color: 'var(--dark-gray)' }}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quisquam nemo tempore quo dolores. Similique corporis
									repudiandae aspernatur aut aperiam eligendi doloremque,
									ratione eaque delectus ad maxime qui esse repellendus nulla.
								</Typography>
							</Stack>
							<Box width={'40%'}>
								<img
									src={require('../assets/images/shovel.png')}
									alt=""
									style={{
										width: '100%',
										height: '280px',
										objectFit: 'cover',
										borderRadius: '0.5rem',
									}}
								/>
							</Box>
						</Stack>
					</Grid>
					<Grid
						item
						xs={7.2}>
						<Stack
							sx={{
								padding: '1.25rem 1.75rem',
								gap: '1rem',
								borderRadius: '1.5rem',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
								padding: '1.8rem',
							}}>
							<Typography
								variant="h4"
								sx={{ fontSize: '2rem', fontWeight: 'bold', width: '80%' }}>
								Some more title with a short description at least from three
								lines
							</Typography>
							<Typography
								variant="body1"
								sx={{ color: 'var(--dark-gray)' }}>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloribus soluta, vitae necessitatibus cum minima ab alias sit.
								Alias, nam tempore, ipsum eaque minima saepe dicta deserunt
								porro accusantium, quam dolorem?{' '}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={4.8}>
						<Stack
							sx={{
								gap: '1rem',
								borderRadius: '1.5rem',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
								padding: '2rem',
							}}>
							<CustomButton
								text="Plant"
								background="var(--orange)"
								padding="0.5rem"
								width="60%"
								color="var(--black)"
								boxshadow="4px 4px 0 0 black"
								restprops={{ style: { alignSelf: 'flex-end' } }}
							/>
							<CustomButton
								text="Follow"
								background="var(--orange)"
								padding="0.5rem"
								width="60%"
								color="var(--black)"
								boxshadow="-4px 4px 0 0 black"
								restprops={{ style: { alignSelf: 'flex-start' } }}
							/>
							<CustomButton
								text="Reap"
								background="var(--orange)"
								padding="0.5rem"
								width="60%"
								color="var(--black)"
								boxshadow="4px 4px 0 0 black"
								restprops={{ style: { alignSelf: 'flex-end' } }}
							/>
							<CustomButton
								text="Treat"
								background="var(--orange)"
								padding="0.5rem"
								width="60%"
								color="var(--black)"
								boxshadow="-4px 4px 0 0 black"
								restprops={{ style: { alignSelf: 'flex-start' } }}
							/>
						</Stack>
					</Grid>
				</Grid>

				<Stack
					sx={{
						width: '50%',
						padding: '1.5rem 0',
						marginTop: '1.3rem !important',
						alignItems: 'center',
						gap: '3rem',
						borderRadius: '1.5rem',
						boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
					}}>
					<Stack
						sx={{ gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
						<Typography
							variant="h5"
							sx={{ fontWeight: 'bold' }}>
							Titleeeee
						</Typography>
						<Typography
							variant="body1"
							sx={{ color: 'var(--dark-gray)', width: '80%' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							nemo tempore quo dolores. Similique corporis repudiandae
							aspernatur aut aperiam eligendi doloremque, ratione eaque delectus
							ad maxime qui esse repellendus nulla.
						</Typography>
					</Stack>
					<Box>
						<img
							src={require('../assets/images/plant-in-white-pot.jpg')}
							alt=""
							style={{
								width: '300px',
								height: '300px',
								borderRadius: '50%',
								objectFit: 'cover',
							}}
						/>
					</Box>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Features;
