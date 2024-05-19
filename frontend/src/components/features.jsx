import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import CustomButton from '../utils/customButton';
import { motion } from 'framer-motion';

const Features = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd">
			<Stack sx={{ marginBottom: '2.5rem' }}>
				<Heading text="Features" />
			</Stack>
			<Stack
				direction={{ xs: 'column', lg: 'row' }}
				spacing={3}>
				<Grid
					sx={{ width: { xs: '100%', lg: '95%' } }}
					container
					spacing={3}>
					<Grid
						item
						paddingLeft={{ xs: '0 !important', lg: '24px !important' }}
						xs={12}>
						<Stack
							component={motion.div}
							initial={{ transform: 'scaleX(0)' }}
							whileInView={{ transform: 'scaleX(1)' }}
							transition={{ duration: 1 }}
							direction={{ xs: 'column-reverse', md: 'row' }}
							sx={{
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: { xs: '1.25rem 1.5rem', md: '1.25rem 1.75rem' },
								borderRadius: '1.5rem',
								transformOrigin: 'left',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
								gap: { xs: '1rem', lg: 'unset' },
							}}>
							<Stack
								component={motion.div}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1 }}
								sx={{ gap: '1rem', width: { xs: '100%', md: '50%' } }}>
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
							<Box
								component={motion.div}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1 }}
								width={{ xs: '100%', md: '40%' }}>
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
						paddingLeft={{ xs: '0 !important', lg: '24px !important' }}
						xs={12}
						md={7.2}>
						<Stack
							component={motion.div}
							initial={{ transform: 'scaleX(0)' }}
							whileInView={{ transform: 'scaleX(1)' }}
							transition={{ duration: 1 }}
							sx={{
								gap: '1rem',
								borderRadius: '1.5rem',
								transformOrigin: 'left',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
								padding: '1.8rem',
							}}>
							<Typography
								component={motion.h4}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1 }}
								variant="h4"
								sx={{
									fontSize: '2rem',
									fontWeight: 'bold',
									width: { xs: '100%', lg: '80%' },
								}}>
								Some more title with a short description at least from three
								lines
							</Typography>
							<Typography
								component={motion.p}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1 }}
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
						paddingLeft={{ xs: '0 !important', md: '24px !important' }}
						xs={12}
						md={4.8}>
						<Stack
							component={motion.div}
							initial={{ transform: 'scaleY(0)' }}
							whileInView={{ transform: 'scaleY(1)' }}
							transition={{ duration: 1 }}
							sx={{
								gap: '1rem',
								borderRadius: '1.5rem',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
								padding: '2rem',
								height: '100%',
								justifyContent: 'center',
							}}>
							<Box
								component={motion.div}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1 }}
								sx={{ alignSelf: 'flex-end', width: '60%' }}>
								<CustomButton
									text="Plant"
									background="var(--orange)"
									padding="0.5rem"
									width="100%"
									color="var(--black)"
									boxshadow="4px 4px 0 0 black"
								/>
							</Box>
							<Box
								component={motion.div}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1.5 }}
								sx={{ alignSelf: 'flex-start', width: '60%' }}>
								<CustomButton
									text="Follow"
									background="var(--orange)"
									padding="0.5rem"
									width="100%"
									color="var(--black)"
									boxshadow="-4px 4px 0 0 black"
								/>
							</Box>
							<Box
								component={motion.div}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 2 }}
								sx={{ alignSelf: 'flex-end', width: '60%' }}>
								<CustomButton
									text="Reap"
									background="var(--orange)"
									padding="0.5rem"
									width="100%"
									color="var(--black)"
									boxshadow="4px 4px 0 0 black"
								/>
							</Box>
							<Box
								component={motion.div}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 2.5 }}
								sx={{ alignSelf: 'flex-start', width: '60%' }}>
								<CustomButton
									text="Treat"
									background="var(--orange)"
									padding="0.5rem"
									width="100%"
									color="var(--black)"
									boxshadow="-4px 4px 0 0 black"
								/>
							</Box>
						</Stack>
					</Grid>
				</Grid>

				<Stack
					component={motion.div}
					initial={{ transform: 'scaleY(0)' }}
					whileInView={{ transform: 'scaleY(1)' }}
					transition={{ duration: 2, type: 'spring' }}
					sx={{
						width: { xs: '100%', lg: '50%' },
						padding: '1.5rem 0',
						marginTop: '1.3rem !important',
						alignItems: 'center',
						gap: { xs: '1.5rem', lg: '3rem' },
						borderRadius: '1.5rem',
						transformOrigin: 'top',
						boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
					}}>
					<Stack
						component={motion.div}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						sx={{
							gap: { xs: '0.5rem', lg: '2rem' },
							alignItems: 'center',
							textAlign: 'center',
						}}>
						<Typography
							variant="h5"
							sx={{ fontWeight: 'bold' }}>
							Titleeeee
						</Typography>
						<Typography
							variant="body1"
							sx={{
								color: 'var(--dark-gray)',
								width: { xs: '85%', lg: '80%' },
							}}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							nemo tempore quo dolores. Similique corporis repudiandae
							aspernatur aut aperiam eligendi doloremque, ratione eaque delectus
							ad maxime qui esse repellendus nulla.
						</Typography>
					</Stack>
					<Box
						component={motion.div}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}>
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
