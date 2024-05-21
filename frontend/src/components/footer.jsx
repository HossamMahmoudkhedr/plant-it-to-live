import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const StyledLink = styled.a`
	color: white;
	&:hover {
		color: var(--peach);
	}
`;
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

					margin: '3rem 0 1rem 0',
					width: '97%',
				}}>
				<Grid
					container
					spacing={3}
					sx={{
						alignItems: 'center',
						padding: { xs: '2rem 1.5rem', lg: '2rem 0 1.5rem 0' },
					}}>
					<Grid
						item
						xs={12}
						md={4}>
						<Stack
							sx={{
								alignItems: 'center',
							}}>
							<Box width="60%">
								<img
									style={{ width: '100%' }}
									src={require('../assets/images/plant-it-to-live-high-resolution-logo-colore.png')}
									alt=""
								/>
							</Box>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Stack
							sx={{
								gap: '1.5rem',
								height: { md: '250px', lg: '200px' },
								alignItems: { xs: 'center', lg: 'unset' },
								textAlign: { xs: 'center', lg: 'unset' },
							}}>
							<Typography
								variant="h6"
								sx={{ color: 'var(--peach)', fontWeight: 'bold' }}>
								Our Mission
							</Typography>
							<Typography
								alignSelf="center"
								variant="body1"
								sx={{ color: 'white', fontSize: 'bold' }}>
								At Plant it to live, our mission is to inspire and support
								everyone to cultivate their own green space, no matter the size.
								We believe that growing your own garden not only enhances your
								environment but also your well-being.
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Stack
							sx={{
								gap: '1.5rem',
								height: { md: '250px', lg: '200px' },
								marginLeft: { lg: '5rem' },
								alignItems: { xs: 'center', lg: 'unset' },
								textAlign: { xs: 'center', lg: 'unset' },
							}}>
							<Typography
								variant="h6"
								sx={{ color: 'var(--peach)', fontWeight: 'bold' }}>
								Quick Links
							</Typography>
							<Stack
								component="ul"
								gap={'1rem'}>
								<li>
									<a
										href=""
										style={{ color: 'white' }}>
										About Us
									</a>
								</li>
								<li>
									<a
										href=""
										style={{ color: 'white' }}>
										Categories
									</a>
								</li>
								<li>
									<a
										href=""
										style={{ color: 'white' }}>
										Features
									</a>
								</li>
								<li>
									<a
										href=""
										style={{ color: 'white' }}>
										Contact
									</a>
								</li>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
				<Stack
					direction={{ xs: 'column', lg: 'row' }}
					sx={{
						padding: '1rem 2.5rem',
						justifyContent: 'space-between',
						alignItems: 'center',
						borderTop: '0.2px solid #efd1ba66',
						width: '100%',

						textAlign: { xs: 'center', lg: 'unset' },
					}}>
					<Typography
						variant="caption"
						sx={{ color: 'white', fontSize: '0.8rem' }}>
						© 2024 Plant it to live. All rights reserved.
					</Typography>
					<Typography
						variant="body1"
						sx={{ color: 'white', fontSize: '1rem' }}>
						Email:{' '}
						<StyledLink href="mailto:plantitolive@gmail.com">
							plantitolive@gmail.com
						</StyledLink>
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Footer;
