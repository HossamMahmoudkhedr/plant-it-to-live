import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';
import { fetchApi } from '../utils/fetchFromAPI';
import Result from '../utils/result';
import { isInputStr } from '../utils/helpers';
import Loading from '../utils/loading';

const CropRecommendation = () => {
	const [data, setData] = useState({});
	const [errorMessage, setErrorMessage] = useState('');
	const [predectedPlant, setPredectedPlant] = useState('');
	const [showResult, setShowResult] = useState(true);
	const [loading, setLoading] = useState(false);
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setData({ ...data, [name]: value });
	};
	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		if (
			data.n &&
			data.pho &&
			data.po &&
			data.PH &&
			data.H &&
			data.R &&
			data.T
		) {
			fetchApi('sendRequestToCropRecommendation', 'POST', data)
				.then((data) => {
					setPredectedPlant(data.data);
					console.log(data);
					setShowResult(true);
					setErrorMessage('');
					setLoading(false);
				})
				.catch((error) => {
					setErrorMessage(error.response.data.massage);
					console.log(error);
					setShowResult(true);
					setPredectedPlant('');
					setLoading(false);
				});
		}
	};
	return (
		<>
			{loading && <Loading />}
			<Stack
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: `url(${require('../assets/images/plant-background.png')})`,
					backgroundSize: 'cover',
					backgroundPositionY: '80%',
					backgroundPositionX: '100%',
					backgroundRepeat: 'no-repeat',
					// backgroundAttachment: 'fixed',
					// backgroundPosition: { xs: '60%', lg: 'bottom' },
				}}>
				{predectedPlant && showResult && (
					<Result
						title="Recommended Crop"
						desc={predectedPlant}
						setShowResult={setShowResult}
					/>
				)}
				{errorMessage !== '' && showResult && (
					<Result
						title="Error"
						desc={errorMessage}
						setShowResult={setShowResult}
					/>
				)}
				<Stack
					sx={{
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
						width: '100%',
						height: '100%',
					}}>
					<Box
						sx={{
							position: 'absolute',
							left: '0',
							top: '0',
							width: '100%',
							height: '100%',
							backgroundColor: 'black',
							opacity: '10%',
							zIndex: '0',
						}}></Box>
					<Container
						maxWidth="lg"
						sx={{ margin: '2rem 0' }}>
						<Stack
							component="form"
							onSubmit={handleSubmit}
							sx={{ position: 'relative', zIndex: 1, gap: '1rem' }}>
							<Stack sx={{ gap: '0.5rem' }}>
								<Typography
									variant="h3"
									sx={{
										color: 'var(--dark-green)',
										fontSize: '1.75rem',
										fontWeight: 'bold',
									}}>
									Crop Recommendation
								</Typography>
								<Typography
									variant="body1"
									sx={{ color: '#AAAAAA' }}>
									Enter the details of your environment below
								</Typography>
							</Stack>

							<Grid
								container
								component="form"
								columnSpacing={8}
								rowSpacing={3}>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Nitrogen"
										labelcolor="var(--dark-green)"
										name="n"
										placeholder="Enter Nitrogen"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Phosphorus"
										labelcolor="var(--dark-green)"
										name="pho"
										placeholder="Enter Phosphorus"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Potassium"
										labelcolor="var(--dark-green)"
										name="po"
										placeholder="Enter Potassium"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Temperature"
										labelcolor="var(--dark-green)"
										name="T"
										placeholder="Enter Temperature in C°"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="Humidity"
										labelcolor="var(--dark-green)"
										name="H"
										placeholder="Enter Humidity in %"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}>
									<CustomInput
										label="pH"
										labelcolor="var(--dark-green)"
										name="PH"
										placeholder="Enter pH value"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
								<Grid
									item
									xs={12}>
									<CustomInput
										label="Rainfall"
										labelcolor="var(--dark-green)"
										name="R"
										placeholder="Enter Rainfall in mm"
										type="text"
										background="#fff9e374"
										restprops={{ onChange: handleInput, onKeyDown: isInputStr }}
									/>
								</Grid>
							</Grid>
							<Stack
								alignItems={'center'}
								gap="1rem"
								margin="2.5rem 0 1rem 0">
								<Box
									sx={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
										width: '100%',
									}}>
									<CustomButton
										background="var(--very-dark-green)"
										borderradius="0.75rem"
										color="white"
										padding="0.7rem 0"
										text="Get recommendation"
										width="100%"
										restprops={{ type: 'submit' }}
									/>
								</Box>
							</Stack>
						</Stack>
					</Container>
				</Stack>
			</Stack>
		</>
	);
};

export default CropRecommendation;
