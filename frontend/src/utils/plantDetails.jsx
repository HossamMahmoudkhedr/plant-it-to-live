import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Dark from './dark';
import CustomButton from './customButton';
import { icons } from './icons';
import { fetchApi } from './fetchFromAPI';
import Cookies from 'js-cookie';

const PlantDetails = ({
	id,
	isUser,
	text,
	suggestion,
	name,
	appropriateSeason,
	fertilizer,
	fertilizerAmount,
	img,
	pruning,
	scientificName,
	soilSalinty,
	sunPerDay,
	sunlight,
	waterAmount,
	watering,
	setShow,
	setAllPlants,
}) => {
	const formData = new FormData();
	const [edit, setEdit] = useState(false);
	const [plant, setPlant] = useState({});
	const [image, setImage] = useState('');
	const fileUploadRef = useRef(null);

	useEffect(() => {
		console.log('added');
		formData.append('common_name', name);
		formData.append('scientific_name', scientificName);
		formData.append('watering', watering);
		formData.append('fertilizer', fertilizer);
		formData.append('sunlight', sunlight);
		formData.append('pruning', pruning);
		formData.append('img', img);
		formData.append('water_amount', waterAmount);
		formData.append('fertilizer_amount', fertilizerAmount);
		formData.append('sun_per_day', sunPerDay);
		formData.append('soil_salinty', soilSalinty);
		formData.append('appropriate_season', appropriateSeason);
	}, [formData]);
	const handleRemove = (id) => {
		fetchApi(`admin/deleteplant?token=${Cookies.get('admin')}&id=${id}`).then(
			(data) => {
				console.log(data);
				setShow(false);
				fetchApi(`admin/plants?token=${Cookies.get('admin')}&page=1`).then(
					(data) => {
						console.log(data.data.data);
						setAllPlants(data.data.data);
					}
				);
			}
		);
	};

	const handleUploadChange = (e) => {
		const file = e.target.files[0];
		console.log(file);
		if (file) {
			formData.append('img', file);
			const reader = new FileReader();
			reader.onload = (e) => {
				setImage(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleData = (e) => {
		if (formData.has(e.target.getAttribute('data-id'))) {
			formData.delete(e.target.getAttribute('data-id'));
		}
		formData.append(e.target.getAttribute('data-id'), e.target.textContent);
	};
	const handleSubmit = (id) => {
		fetchApi(
			`admin/editplant?token=${Cookies.get('admin')}&id=${id}`,
			'POST',
			formData
		).then((data) => {
			console.log(data);
		});
	};

	return (
		<>
			<Dark setShow={setShow} />
			<Stack
				component="form"
				encType="multipart/form-data"
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
					height: '90vh',
					width: '70%',
					overflowY: 'scroll',
				}}>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between">
					<Typography
						variant="h4"
						sx={{ fontWeight: 'bold', color: 'var(--very-dark-green)' }}>
						{name}
					</Typography>
					<Stack
						component="span"
						onClick={() => {
							setShow(false);
						}}
						sx={{
							borderRadius: '50%',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '0.3rem',
							border: '2px solid black',
							cursor: 'pointer',
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
						<input
							ref={fileUploadRef}
							onChange={handleUploadChange}
							name="uploadFile"
							type="file"
							accept="image/*"
							style={{ display: 'none' }}
						/>
						<img
							height="200px"
							width="100%"
							style={{
								objectFit: 'cover !important',
								transition: 'all 0.3s linear',
							}}
							onClick={() => {
								fileUploadRef.current.click();
								setEdit(false);
								handleSubmit(id);
							}}
							src={img || image}
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
								sx={{ fontWeight: 'bold', width: '35%' }}>
								Scientific name:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'scientific_name'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{scientificName}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack
							direction="row"
							gap="1rem">
							<Typography
								component="p"
								variant="body1"
								sx={{ fontWeight: 'bold', width: '60%' }}>
								Appropriate season:
							</Typography>
							<Typography
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'appropriate_season'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{appropriateSeason}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '60%' }}>
								Fertilizer:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'fertilizer'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{fertilizer}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '60%' }}>
								Fertilizer Amount:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'fertilizer_amount'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{fertilizerAmount}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '40%' }}>
								Pruning:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'pruning'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{pruning}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '40%' }}>
								Soil Salinty:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'soil_salinty'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{soilSalinty}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '30%' }}>
								Sun Per Day:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'sun_per_day'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{sunPerDay}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '30%' }}>
								Sunlight:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'sunlight'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{sunlight}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '60%' }}>
								Water Amount:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'water_amount'}
								onKeyDown={handleData}
								contenteditable={`${edit}`}>
								{waterAmount}
							</Typography>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack direction="row">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', width: '60%' }}>
								Watering:
							</Typography>
							<Typography
								component="p"
								variant="body1"
								sx={{
									border: edit ? '2px solid black' : '',
									borderRadius: '5px',
									padding: edit ? '0 0.3rem' : '',
								}}
								data-id={'watering'}
								contenteditable={`${edit}`}
								onKeyDown={handleData}>
								{watering}
							</Typography>
						</Stack>
					</Grid>
					{/* <Grid
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
					</Grid> */}
				</Grid>
				{isUser && !suggestion && (
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
				{!isUser && !suggestion && (
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
								restprops={{
									onClick: () => {
										handleRemove(id);
									},
								}}
								icHeight="22px"
							/>
						</Box>
						<Box sx={{ fontWeight: 'bold' }}>
							<CustomButton
								text={edit ? 'Save' : 'Edit'}
								background="black"
								borderradius={'0.8rem'}
								color="white"
								padding={'1rem 1.5rem'}
								icon={edit ? '' : icons.linedEdit}
								icHeight={'22px'}
								restprops={{
									onClick: () => {
										setEdit(!edit);
										if (edit) {
											handleSubmit(id);
										}
									},
								}}
							/>
						</Box>
					</Stack>
				)}
				{!isUser && suggestion && (
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ fontSize: 'bold' }}>
						<CustomButton
							text={'Approve'}
							background="var(--very-dark-green)"
							borderradius={'1.25rem'}
							color="white"
							icon={icons.check}
							icHeight={'22px'}
							padding={'1.25rem'}
						/>
						<CustomButton
							text={'Deny'}
							background="#BA1327"
							borderradius={'0.8rem'}
							color="white"
							padding={'1rem 1.5rem'}
							icon={icons.circleX}
							icHeight="22px"
						/>
						<CustomButton
							text={'Edit'}
							background="black"
							borderradius={'0.8rem'}
							color="white"
							padding={'1rem 1.5rem'}
							icon={icons.linedEdit}
							icHeight={'22px'}
						/>
					</Stack>
				)}
			</Stack>
		</>
	);
};

export default PlantDetails;
