import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import ImageFrame from '../utils/imageFrame';
import RoseCircle from '../utils/roseCircle';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import CustomButton from '../utils/customButton';
import { icons } from '../utils/icons';
import { motion } from 'framer-motion';

const imagesVariants = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 2,
			delay: 0.5,
			type: 'spring',
		},
	},
};

const opacityVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 2,
			type: 'spring',
		},
	},
};

const Hero = () => {
	return (
		<Container maxWidth="xl">
			<Navbar />
			<Stack
				sx={{
					alignItems: 'center',
					gap: '2.5rem',
					position: 'relative',
					marginBottom: '2rem',
				}}>
				<RoseCircle
					width={{ xs: '223px', lg: '380px' }}
					left="15%"
					top="7%"
				/>
				<Typography
					variant="h1"
					sx={{
						color: 'var(--dark-green)',
						fontSize: { xs: '2rem', md: '2.5rem' },
						fontWeight: '600',
						textAlign: 'center',
						width: { xs: 'unset', lg: '32%' },
						lineHeight: { xs: '45px', lg: '55px' },
					}}>
					Grow your health, Grow a garden
				</Typography>
				<Grid
					container
					spacing={10}>
					<Grid
						item
						sx={{ display: { xs: 'none', lg: 'block' } }}
						lg={4}
						xs={12}>
						<Stack
							direction="row"
							sx={{ justifyContent: 'center', paddingTop: '3.5rem' }}>
							<Stack sx={{ gap: '1rem', width: '227px', alignItems: 'center' }}>
								<Box
									component={motion.div}
									variants={imagesVariants}
									initial="hidden"
									animate="visible">
									<ImageFrame
										imgheight="248px"
										radius="0 70px 0 0 "
										right="-10px"
										childheight="93%"
										top="5px"
										image="brina-blum-LtofmaMoCFU-unsplash.jpg"
									/>
								</Box>

								<Typography
									component={motion.p}
									variants={opacityVariants}
									initial="hidden"
									animate="visible"
									variant="body1"
									sx={{ width: '80%', textAlign: 'center' }}>
									{/* <Link to="/">
										<Box
											component="span"
											sx={{
												color: 'var(--very-light-green)',
												fontSize: '1rem',
											}}>
											Click here!
										</Box>
									</Link>{' '} */}
									to check your plants’ health by uploading photos.
								</Typography>
							</Stack>
						</Stack>
					</Grid>
					<Grid
						item
						lg={4}
						xs={12}>
						<Stack
							sx={{
								alignItems: 'center',
								gap: '2.5rem',
								position: 'relative',
								marginTop: '2rem',
							}}>
							<Box
								component={motion.span}
								variants={{
									...opacityVariants,
									visible: {
										...opacityVariants.visible,
										transition: { duration: 0.5, delay: 1.5, type: 'spring' },
									},
								}}
								initial="hidden"
								animate="visible"
								sx={{
									position: 'absolute',
									top: { xs: '-4rem', lg: '30px' },
									right: { xs: '20%', lg: '-130px' },
								}}>
								{icons.stars}
							</Box>
							<Box
								component={motion.span}
								variants={{
									...opacityVariants,
									visible: {
										...opacityVariants.visible,
										transition: { duration: 0.5, delay: 1.8, type: 'spring' },
									},
								}}
								initial="hidden"
								animate="visible"
								sx={{ position: 'absolute', bottom: '180px', left: '-110px' }}>
								{icons.stars}
							</Box>
							<Box
								component={motion.div}
								variants={{
									...imagesVariants,
									visible: {
										...imagesVariants.visible,
										transition: { duration: 2, delay: 0.7, type: 'spring' },
									},
								}}
								initial="hidden"
								animate="visible">
								<ImageFrame
									imgheight={{ xs: '320px', md: '350px', lg: '474px' }}
									imgwidth={{ xs: '320px', md: '350px', lg: '454px' }}
									childwidth="102%"
									radius={{ xs: '50% 50% 0 0', lg: '0 136px 0 0 ' }}
									right={{ xs: '5px', lg: '-20px' }}
									childheight="101%"
									top="5px"
									image="pexels-anna-nekrashevich-8988956.jpg"
								/>
							</Box>
							<Box
								component={motion.div}
								variants={opacityVariants}
								initial="hidden"
								animate="visible"
								fontWeight="bold"
								fontSize={'1.25rem'}>
								<Link to="/plantsDetails">
									<CustomButton
										background="var(--linear-background)"
										color="white"
										text="Start Planting"
										padding="0.5rem 2rem"
										borderradius="40px 0 40px 0"
									/>
								</Link>
							</Box>
						</Stack>
					</Grid>
					<Grid
						item
						sx={{ display: { xs: 'none', lg: 'block' } }}
						lg={4}
						xs={12}>
						<Stack
							direction="row"
							sx={{ justifyContent: 'center', position: 'relative' }}>
							<Box
								sx={{
									position: 'absolute',
									right: '100px',
									bottom: '-100px',
									opacity: '0.4',
								}}>
								{icons.leafs}
							</Box>
							<Stack sx={{ gap: '1.25rem', width: '227px' }}>
								<Box
									component={motion.div}
									variants={{
										...imagesVariants,
										visible: {
											...imagesVariants.visible,
											transition: { duration: 2, delay: 1, type: 'spring' },
										},
									}}
									initial="hidden"
									animate="visible">
									<ImageFrame
										imgheight="281px"
										radius="113.5px 113.5px 0 0 "
										left="-15px"
										childheight="100%"
										top="-5px"
										image="brina-blum-wATDAuB4Gto-unsplash.jpg"
									/>
								</Box>
								<Stack
									component={motion.div}
									variants={opacityVariants}
									initial="hidden"
									animate="visible">
									<Typography
										variant="body1"
										sx={{ width: '80%' }}>
										Want to check if the plant can be planted in your
										environment?
									</Typography>
									{/* <Link to="/">
										<Box
											component="span"
											sx={{
												color: 'var(--very-light-green)',
												fontSize: '1rem',
											}}>
											Click here!
										</Box>
									</Link> */}
								</Stack>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Stack>
		</Container>
	);
};

export default Hero;
