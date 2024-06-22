import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Dark from './dark';
import CustomButton from './customButton';
import { icons } from './icons';
import { fetchApi } from './fetchFromAPI';
import Cookies from 'js-cookie';
import NoStyleInput from './noStyleInput';
import NoStyleTextarea from './noStyleTextarea';
import { filterProps } from 'framer-motion';

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
	setSuggestions,
}) => {
	const [edit, setEdit] = useState(false);
	const [textToUser, setTextToUser] = useState('');
	const [plant, setPlant] = useState({
		name,
		appropriateSeason,
		fertilizer,
		fertilizerAmount,
		pruning,
		scientificName,
		soilSalinty,
		sunPerDay,
		sunlight,
		waterAmount,
		watering,
		img,
	});
	const [image, setImage] = useState('');
	const fileUploadRef = useRef(null);
	const [editImg, setEditImg] = useState(false);
	useEffect(() => {
		setPlant({
			name,
			appropriateSeason,
			fertilizer,
			fertilizerAmount,
			pruning,
			scientificName,
			soilSalinty,
			sunPerDay,
			sunlight,
			waterAmount,
			watering,
		});
	}, [
		name,
		appropriateSeason,
		fertilizer,
		fertilizerAmount,
		pruning,
		scientificName,
		soilSalinty,
		sunPerDay,
		sunlight,
		waterAmount,
		watering,
		img,
	]);

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

	const [suggestedImg, setSuggestedImg] = useState();
	const [uploadedImg, setUpoloadedImg] = useState(false);
	const handleUploadChange = (e) => {
		if (editImg) {
			const file = e.target.files[0];
			console.log(file);
			if (file) {
				setSuggestedImg(file);
				setUpoloadedImg(true);
				const formData = new FormData();
				formData.append('common_name', plant.name);
				formData.append('scientific_name', plant.scientificName);
				formData.append('watering', plant.watering);
				formData.append('fertilizer', plant.fertilizer);
				formData.append('sunlight', plant.sunlight);
				formData.append('pruning', plant.pruning);
				formData.append('img', file);
				formData.append('water_amount', plant.waterAmount);
				formData.append('fertilizer_amount', plant.fertilizerAmount);
				formData.append('sun_per_day', plant.sunPerDay);
				formData.append('soil_salinty', plant.soilSalinty);
				formData.append('appropriate_season', plant.appropriateSeason);

				if (!suggestion) {
					fetchApi(
						`admin/editplant?token=${Cookies.get('admin')}&id=${id}`,
						'POST',
						formData
					).then((data) => {
						console.log(data);
						fetchApi(`admin/plants?token=${Cookies.get('admin')}&page=1`).then(
							(data) => {
								console.log(data.data.data);
								setAllPlants(data.data.data);
							}
						);
					});
				} else if (suggestion) {
					fetchApi(
						`admin/editsuggestion?token=${Cookies.get('admin')}&id=${id}`,
						'POST',
						formData
					).then((data) => {
						console.log(data);
						fetchApi(`admin/allsuggestions?token=${Cookies.get('admin')}`).then(
							(data) => {
								setSuggestions(data.data.data);
							}
						);
					});
				}
				const reader = new FileReader();
				reader.onload = (e) => {
					setImage(e.target.result);
					setPlant((prevPlant) => ({
						...prevPlant,
						img: file,
					}));
				};
				reader.readAsDataURL(file);
			}
		}
	};

	const handleData = (e) => {
		const { name, value } = e.target;
		console.log(value);

		setPlant({ [e.target.name]: e.target.value });
		console.log(name);
	};

	const handleSubmit = (id) => {
		const formData = new FormData();
		formData.append('common_name', name);
		formData.append('scientific_name', plant.scientificName);
		formData.append('watering', watering);
		formData.append('fertilizer', fertilizer);
		formData.append('sunlight', sunlight);
		formData.append('pruning', pruning);
		// if (editImg) {
		// 	formData.append('img', img);
		// }
		formData.append('water_amount', waterAmount);
		formData.append('fertilizer_amount', fertilizerAmount);
		formData.append('sun_per_day', sunPerDay);
		formData.append('soil_salinty', soilSalinty);
		formData.append('appropriate_season', appropriateSeason);
		for (const key in plant) {
			if (plant.hasOwnProperty(key)) {
				formData.set(key, plant[key]);
			}
		}
		// if (plant.img && !suggestion && editImg) {
		// 	formData.set('img', suggestedImg);
		// }
		// if (suggestion && suggestedImg && editImg) {
		// 	formData.set('img', suggestedImg);
		// }
		if (!suggestion) {
			fetchApi(
				`admin/editplant?token=${Cookies.get('admin')}&id=${id}`,
				'POST',
				formData
			).then((data) => {
				console.log(data);
				fetchApi(`admin/plants?token=${Cookies.get('admin')}&page=1`).then(
					(data) => {
						console.log(data.data.data);
						setAllPlants(data.data.data);
					}
				);
			});
		} else if (suggestion) {
			fetchApi(
				`admin/editsuggestion?token=${Cookies.get('admin')}&id=${id}`,
				'POST',
				formData
			).then((data) => {
				console.log(data);
				fetchApi(`admin/allsuggestions?token=${Cookies.get('admin')}`).then(
					(data) => {
						setSuggestions(data.data.data);
					}
				);
			});
		}
	};

	useEffect(() => {
		if (id) {
			fetchApi(`userplants?token=${Cookies.get('user')}`)
				.then((data) => {
					let plants = data.data.data;
					let selectedPlant = plants.filter((el) => el.id === id);
					console.log(selectedPlant.length);
					if (selectedPlant.length !== 0) {
						setTextToUser('Unsave from my profile');
					} else {
						setTextToUser('Save to my profile');
					}
				})
				.catch((error) => {
					setTextToUser('Save to my profile');
				});
		}
	}, [id]);

	const handleSaveToProfile = () => {
		if (textToUser === 'Save to my profile') {
			fetchApi(
				`selectplant?token=${Cookies.get('user')}&id=${id}`,
				'POST'
			).then((data) => {
				setTextToUser('Unsave from my profile');
			});
		} else {
			fetchApi(
				`removeplant?token=${Cookies.get('user')}&id=${id}`,
				'POST'
			).then((data) => {
				setTextToUser('Save to my profile');
			});
		}
	};

	const handleApprove = (id) => {
		fetchApi(`admin/acceptsuggestion?token=${Cookies.get('admin')}&id=${id}`)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleDeny = (id) => {
		fetchApi(`admin/deletesuggestion?token=${Cookies.get('admin')}&id=${id}`)
			.then((data) => {
				console.log(data);
				setShow(false);
				fetchApi(`admin/allsuggestions?token=${Cookies.get('admin')}`).then(
					(data) => {
						setSuggestions(data.data.data);
					}
				);
			})
			.catch((error) => {
				console.log(error);
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
							position: 'relative',
							width: '100%',
							position: 'relative',
						}}>
						{!editImg && !edit && !isUser && (
							<Button
								variant="contained"
								sx={{
									position: 'absolute',
									left: '20px',

									top: '20px',
									zIndex: '2',
									color: 'white',
									backgroundColor: 'var(--very-dark-green)',
									'&:hover': { backgroundColor: 'var(--very-dark-green)' },
								}}
								onClick={() => {
									setEditImg(true);
								}}>
								Edit Image
							</Button>
						)}
						<input
							ref={fileUploadRef}
							onChange={handleUploadChange}
							name="uploadFile"
							type="file"
							accept="image/*"
							style={{ display: 'none' }}
						/>
						{editImg && (
							<Button
								variant="contained"
								sx={{
									position: 'absolute',
									left: '50%',
									transform: 'translateX(-50%)',
									top: '20px',
									zIndex: '2',
									color: 'white',
									backgroundColor: 'var(--very-dark-green)',
									'&:hover': { backgroundColor: 'var(--very-dark-green)' },
								}}
								onClick={() => {
									if (editImg) {
										fileUploadRef.current.click();
									}
									// setEdit(false);
									// handleSubmit(id);
								}}>
								Click To Upload The Photot
							</Button>
						)}
						{!edit && (
							<img
								width="100%"
								style={{
									objectFit: 'cover !important',
									transition: 'all 0.3s linear',
								}}
								src={
									image
										? image
										: require(`../assets/images/${img ? img : 'grape.png'}`)
								}
								alt=""
								loading="lazy"
							/>
						)}

						{/* {!edit && lastImage && (
							<img
								width="100%"
								style={{
									objectFit: 'cover !important',
									transition: 'all 0.3s linear',
								}}
								src={require(`../assets/images/${
									lastImage ? lastImage : 'grape.png'
								}`)}
								alt=""
								loading="lazy"
							/>
						)} */}
						{edit && (
							<img
								width="100%"
								style={{
									objectFit: 'cover !important',
									transition: 'all 0.3s linear',
								}}
								src={image ? image : require(`../assets/images/${img}`)}
								alt=""
								loading="lazy"
							/>
						)}
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
						<Stack
							direction="row"
							alignItems="center"
							gap="1rem">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
								Common name:
							</Typography>

							<NoStyleInput
								type="text"
								value={plant.name}
								name={'common_name'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onInput: handleData }}
							/>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Stack
							direction="row"
							alignItems="center"
							gap="1rem">
							<Typography
								variant="body1"
								sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
								Scientific name:
							</Typography>

							<NoStyleInput
								type="text"
								value={plant.scientificName}
								name={'scientific_name'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onInput: handleData }}
							/>
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

							<NoStyleInput
								type="text"
								value={plant.appropriateSeason}
								name={'appropriate_season'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData }}
							/>
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
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								Fertilizer:
							</Typography>

							<NoStyleInput
								type="text"
								value={plant.fertilizer}
								name={'fertilizer'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '1' }}
							/>
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

							<NoStyleTextarea
								type="text"
								value={plant.fertilizerAmount}
								name={'fertilizer_amount'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								Pruning:
							</Typography>

							<NoStyleTextarea
								type="text"
								value={plant.pruning}
								name={'pruning'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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
								Soil Salinty:
							</Typography>

							<NoStyleTextarea
								type="text"
								value={plant.soilSalinty}
								name={'soil_salinty'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								Sun Per Day:
							</Typography>

							<NoStyleTextarea
								type="text"
								value={plant.sunPerDay}
								name={'sun_per_day'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								Sunlight:
							</Typography>

							<NoStyleTextarea
								type="text"
								value={plant.sunlight}
								name={'sunlight'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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
								variant="body1"
								sx={{ fontWeight: 'bold' }}>
								Water Amount:
							</Typography>

							<NoStyleTextarea
								type="text"
								value={plant.waterAmount}
								name={'water_amount'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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

							<NoStyleTextarea
								type="text"
								value={plant.watering}
								name={'watering'}
								padding={edit ? '10px' : ''}
								border={edit ? '1px solid black' : ''}
								contenteditable={!edit}
								restprops={{ onChange: handleData, rows: '5', cols: '30' }}
							/>
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
							text={textToUser ? textToUser : text}
							background="var(--very-dark-green)"
							borderradius={'1.25rem'}
							color="white"
							padding={'1.25rem'}
							width={'50%'}
							restprops={{ onClick: handleSaveToProfile }}
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
							restprops={{
								onClick: () => {
									handleApprove(id);
								},
							}}
						/>
						<CustomButton
							text={'Deny'}
							background="#BA1327"
							borderradius={'0.8rem'}
							color="white"
							padding={'1rem 1.5rem'}
							icon={icons.circleX}
							icHeight="22px"
							restprops={{
								onClick: () => {
									handleDeny(id);
								},
							}}
						/>
						<CustomButton
							text={edit ? 'Save' : 'Edit'}
							background="black"
							borderradius={'0.8rem'}
							color="white"
							padding={'1rem 1.5rem'}
							icon={icons.linedEdit}
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
					</Stack>
				)}
			</Stack>
		</>
	);
};

export default PlantDetails;
