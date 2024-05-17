import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import ImageFrame from '../utils/imageFrame';
import RoseCircle from '../utils/roseCircle';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import CustomButton from '../utils/customButton';
import { icons } from '../utils/icons';

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
					width={'380px'}
					left="15%"
					top="7%"
				/>
				<Typography
					variant="h1"
					sx={{
						color: 'var(--dark-green)',
						fontSize: '3rem',
						textAlign: 'center',
						width: '32%',
						lineHeight: '80px',
					}}>
					Grow your health, Grow a garden
				</Typography>
				<Grid
					container
					spacing={10}>
					<Grid
						item
						xs={4}>
						<Stack
							direction="row"
							sx={{ justifyContent: 'center', paddingTop: '3.5rem' }}>
							<Stack sx={{ gap: '1rem', width: '227px', alignItems: 'center' }}>
								<ImageFrame
									imgheight="248px"
									radius="0 70px 0 0 "
									right="-10px"
									childheight="232px"
									top="5px"
									image="brina-blum-LtofmaMoCFU-unsplash.jpg"
								/>

								<Typography
									variant="body1"
									sx={{ width: '80%', textAlign: 'center' }}>
									<Link to="/">
										<Box
											component="span"
											sx={{
												color: 'var(--very-light-green)',
												fontSize: '1rem',
											}}>
											Click here!
										</Box>
									</Link>{' '}
									to check your plants’ health by uploading photos.
								</Typography>
							</Stack>
						</Stack>
					</Grid>
					<Grid
						item
						xs={4}>
						<Stack
							sx={{
								alignItems: 'center',
								gap: '2.5rem',
								position: 'relative',
								marginTop: '2rem',
							}}>
							<Box
								component="span"
								sx={{ position: 'absolute', top: '30px', right: '-130px' }}>
								{icons.stars}
							</Box>
							<Box
								component="span"
								sx={{ position: 'absolute', bottom: '180px', left: '-110px' }}>
								{icons.stars}
							</Box>
							<ImageFrame
								imgheight="474px"
								imgwidth="454px"
								radius="0 136px 0 0 "
								right="-20px"
								childheight="437px"
								top="5px"
								image="pexels-anna-nekrashevich-8988956.jpg"
							/>
							<Box
								fontWeight="bold"
								fontSize={'1.25rem'}>
								<Link to="/">
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
						xs={4}>
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
								<ImageFrame
									imgheight="281px"
									radius="113.5px 113.5px 0 0 "
									left="-15px"
									childheight="281px"
									top="-5px"
									image="brina-blum-wATDAuB4Gto-unsplash.jpg"
								/>
								<Stack>
									<Typography
										variant="body1"
										sx={{ width: '80%' }}>
										Want to check if the plant can be planted in your
										environment?
									</Typography>
									<Link to="/">
										<Box
											component="span"
											sx={{
												color: 'var(--very-light-green)',
												fontSize: '1rem',
											}}>
											Click here!
										</Box>
									</Link>
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
