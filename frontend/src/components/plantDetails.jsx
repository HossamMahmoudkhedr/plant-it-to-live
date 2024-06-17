import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Dark from '../utils/dark';
import CustomButton from '../utils/customButton';
import { icons } from '../utils/icons';

const PlantDetails = ({ isUser, text }) => {
	return (
		<>
			<Dark />
			<Stack
				gap="1.5rem"
				sx={{
					position: 'fixed',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%) ',
					backgroundColor: 'white',
					padding: '2rem 3rem',
					borderRadius: '1.25rem',
					zIndex: '9',
				}}>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between">
					<Typography
						variant="h4"
						sx={{ fontWeight: 'bold', color: 'var(--very-dark-green)' }}>
						Plant Name
					</Typography>
					<Stack
						component="span"
						sx={{
							borderRadius: '50%',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '0.3rem',
							border: '2px solid black',
						}}>
						{icons.closeIcon}
					</Stack>
				</Stack>
				<Stack
					direction="row"
					justifyContent="center">
					<Box
						sx={{
							overflow: 'hidden',
							borderRadius: '1.25rem',
							height: '222px',
						}}>
						<img
							width="100%"
							style={{
								objectFit: 'cover !important',
								transition: 'all 0.3s linear',
							}}
							src={require(`../assets/images/orange.jpg`)}
							alt=""
							loading="lazy"
						/>
					</Box>
				</Stack>
				<Grid
					container
					spacing={3}
					padding="0 2rem">
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								common Name:
							</Typography>
							<Typography variant="body1">Orange</Typography>
						</Stack>
					</Grid>
				</Grid>
				{isUser && (
					<Stack
						direction="row"
						justifyContent="center"
						sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
						<CustomButton
							text={text}
							background="var(--very-dark-green)"
							borderradius={'1.25rem'}
							color="white"
							padding={'1.25rem'}
							width={'50%'}
						/>
					</Stack>
				)}
				{!isUser && (
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center">
						<Box sx={{ fontWeight: 'bold' }}>
							<CustomButton
								text={'Remove'}
								background="#BA1327"
								borderradius={'0.8rem'}
								color="white"
								padding={'1rem 1.5rem'}
								icon={icons.circleX}
								icHeight="22px"
							/>
						</Box>
						<Box sx={{ fontWeight: 'bold' }}>
							<CustomButton
								text={'Edit'}
								background="black"
								borderradius={'0.8rem'}
								color="white"
								padding={'1rem 1.5rem'}
								icon={icons.linedEdit}
								icHeight={'22px'}
							/>
						</Box>
					</Stack>
				)}
			</Stack>
		</>
	);
};

export default PlantDetails;
