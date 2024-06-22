import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Heading from '../utils/heading';
import { icons } from '../utils/icons';
import CustomButton from '../utils/customButton';
import Result from '../utils/result';
import { fetchApi } from '../utils/fetchFromAPI';
import useMutation from 'use-mutation';
import Loading from '../utils/loading';

const DetectDiseases = () => {
	const formData = new FormData();
	const fileUploadRef = useRef(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [disease, setDisease] = useState('');
	const [showResult, setShowResult] = useState(true);
	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(false);
	const handleClick = () => {
		formData.forEach((el) => {
			formData.delete(el);
		});
		fileUploadRef.current.click();
	};
	const handleUploadChange = (e) => {
		setLoading(true);
		const file = e.target.files[0];
		console.log(file);
		if (file) {
			formData.append('img', file);

			fetchApi('sendRequestToDiseasesDetection', 'POST', formData)
				.then((data) => {
					setDisease(data.data.prediction);
					console.log(data);
					setLoading(false);
				})
				.catch((error) => {
					setErrorMessage('Something went wrong, please try again');
					console.log(error);
					setLoading(false);
				});
			const reader = new FileReader();
			reader.onload = (e) => {
				setImage(e.target.result);
			};
			reader.readAsDataURL(file);
		}
		setShowResult(true);
		setDisease('');

		setErrorMessage('');
	};
	return (
		<>
			{loading && <Loading />}
			{disease && showResult && (
				<Result
					title="Detecting Result"
					desc={disease}
					setShowResult={setShowResult}
				/>
			)}
			{errorMessage && showResult && (
				<Result
					title="Detecting Result"
					desc={errorMessage}
					setShowResult={setShowResult}
				/>
			)}
			<Container maxWidth="lg">
				<Stack
					component="form"
					encType="multipart/form-data"
					sx={{ alignItems: 'flex-start', marginTop: '2rem', gap: '1.5rem' }}>
					<Heading text="Upload Image" />
					<Stack
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#4caf50a3',
							width: '100%',
							height: '70vh',
							borderRadius: '0.8rem',
							border: '2px dotted gray',
							overflow: 'hidden',
						}}>
						{image ? (
							<img
								src={image}
								alt=""
								style={{ objectFit: 'cover', width: '100%' }}
							/>
						) : (
							<Stack sx={{ alignItems: 'center', gap: '1rem' }}>
								<Box component="span">{icons.images}</Box>
								<Stack sx={{ gap: '1rem', alignItems: 'center' }}>
									<Typography
										variant="body1"
										sx={{
											fontSize: '1.5rem',
											fontWeight: '600',
											color: 'white',
											textAlign: 'center',
											width: '55%',
										}}>
										Drag and drop an image of a plant leaf to process
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontSize: '0.8rem',
											color: 'white',
											textAlign: 'center',
										}}>
										Allowed Formats: JPG, JPEG, PNG
									</Typography>
								</Stack>
							</Stack>
						)}
					</Stack>
					<Box sx={{ fontSize: '1.5rem', width: '100%' }}>
						<input
							ref={fileUploadRef}
							onChange={handleUploadChange}
							name="uploadFile"
							type="file"
							accept="image/*"
							style={{ display: 'none' }}
						/>
						<CustomButton
							background="var(--very-dark-green)"
							color="white"
							width="100%"
							padding="0.5rem"
							text="Upload Images"
							borderradius="0.8rem"
							icHeight={'30px'}
							icon={icons.upload}
							restprops={{ onClick: handleClick }}
						/>
					</Box>
				</Stack>
			</Container>
		</>
	);
};

export default DetectDiseases;
