import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import CustomButton from '../utils/customButton';
import { motion } from 'framer-motion';

const opacityVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 1,
		},
	},
};
const scaleVariants = {
	hidden: {
		transform: 'scaleX(0)',
	},
	visible: {
		transform: 'scaleX(1)',
		transition: {
			duration: 1,
		},
	},
};

const Features = () => {
	return (
		<Container
			id="features"
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
							variants={scaleVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
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
								variants={opacityVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								sx={{ gap: '1rem', width: { xs: '100%', md: '50%' } }}>
								<Typography
									variant="h5"
									sx={{ fontWeight: 'bold' }}>
									Crop Recommendation
								</Typography>
								<Typography
									variant="body1"
									sx={{ color: 'var(--dark-gray)' }}>
									This feature suggests the most suitable crops for users based
									on their environmental conditions, ensuring the best possible
									growth outcomes.
								</Typography>
							</Stack>
							<Box
								component={motion.div}
								variants={opacityVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
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
							variants={scaleVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							sx={{
								gap: '1rem',
								borderRadius: '1.5rem',
								transformOrigin: 'left',
								boxShadow: '0px 0px 8.0px hsl(0deg 0% 0% / 0.38);',
								padding: '1.8rem',
							}}>
							<Typography
								component={motion.h4}
								variants={opacityVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variant="h4"
								sx={{
									fontSize: '2rem',
									fontWeight: 'bold',
									width: { xs: '100%', lg: '80%' },
								}}>
								Plant disease detection to help your plant grow healthy
							</Typography>
							<Typography
								component={motion.p}
								variants={opacityVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variant="body1"
								sx={{ color: 'var(--dark-gray)' }}>
								{' '}
								Users can upload images of their plants, and our AI model will
								diagnose any diseases, providing detailed instructions on how to
								treat and care for the affected plants.{' '}
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
							variants={scaleVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
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
								variants={opacityVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
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
								variants={{
									...opacityVariants,
									visible: {
										...opacityVariants.visible,
										transition: { duration: 1, delay: 1.2 },
									},
								}}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
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
								variants={{
									...opacityVariants,
									visible: {
										...opacityVariants.visible,
										transition: { duration: 1, delay: 1.5 },
									},
								}}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
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
								variants={{
									...opacityVariants,
									visible: {
										...opacityVariants.visible,
										transition: { duration: 1, delay: 1.8 },
									},
								}}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
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
					variants={scaleVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
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
						variants={opacityVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						sx={{
							gap: { xs: '0.5rem', lg: '2rem' },
							alignItems: 'center',
							textAlign: 'center',
						}}>
						<Typography
							variant="h5"
							sx={{ fontWeight: 'bold' }}>
							Plant Information Database
						</Typography>
						<Typography
							variant="body1"
							sx={{
								color: 'var(--dark-gray)',
								width: { xs: '85%', lg: '80%' },
							}}>
							Users can select from a comprehensive list of plants stored in our
							database. For each plant, the platform offers detailed information
							on water requirements, sun exposure, and other critical care tips
							to ensure healthy growth.
						</Typography>
					</Stack>
					<Box
						component={motion.div}
						variants={opacityVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}>
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
