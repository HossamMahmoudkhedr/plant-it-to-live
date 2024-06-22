import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { icons } from '../utils/icons';
import styled from 'styled-components';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';
import { fetchApi } from '../utils/fetchFromAPI';
import Cookies from 'js-cookie';
import Loading from '../utils/loading';
import AlertMessage from '../utils/alertMessage';

const Security = ({ isUser }) => {
	const [passwordsData, setPasswordsData] = useState({});
	const [disable, setDisable] = useState(true);
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setPasswordsData({ ...passwordsData, [name]: value });
	};

	useEffect(() => {
		if (
			passwordsData['password'] &&
			passwordsData['oldpassword'] &&
			passwordsData['password_confirmation']
		) {
			setDisable(false);
		} else {
			setDisable(true);
		}
	}, [passwordsData]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData();

		for (let key in passwordsData) {
			formData.append(key, passwordsData[key]);
		}
		if (isUser) {
			fetchApi(`changepassword/?token=${Cookies.get('user')}`, 'POST', formData)
				.then((data) => {
					console.log(data);
					setLoading(false);
					setError(false);
					setShow(true);
					setMessage('The Password has been changed successfully');
				})
				.catch((error) => {
					console.log(error);
					let response =
						error.response.data.data &&
						error.response.data.data[Object.keys(error.response.data.data)[0]];
					if (response) {
						setMessage(response || 'Something went worng, pleas try again!');
					} else {
						setMessage(
							error.response.data.message ||
								'Something went worng, pleas try again!'
						);
					}
					setError(true);
					setShow(true);
					setLoading(false);
				});
		} else {
			fetchApi(
				`admin/changepassword?token=${Cookies.get('admin')}`,
				'POST',
				formData
			)
				.then((data) => {
					console.log(data);
					setLoading(false);
					setMessage('The Password has been changed successfully');
					setError(false);
					setShow(true);
				})
				.catch((error) => {
					console.log(error);
					let response =
						error.response.data.data[Object.keys(error.response.data.data)[0]];
					if (response) {
						setMessage(response || 'Something went worng, pleas try again!');
					} else {
						setMessage(
							error.response.data.message ||
								'Something went worng, pleas try again!'
						);
					}
					setShow(true);
					setError(true);
					setLoading(false);
				});
		}
	};
	return (
		<>
			{loading && <Loading />}
			{show && (
				<AlertMessage
					error={error}
					message={message}
					setShow={setShow}
				/>
			)}
			<Stack
				component="form"
				onSubmit={handleSubmit}
				gap="1rem">
				<Stack
					sx={{
						padding: '2rem',
						borderRadius: '1.25rem',
						gap: '2rem',
						backgroundColor: 'white',
					}}>
					<Stack
						direction="row"
						sx={{ justifyContent: 'center' }}>
						<Typography
							variant="h3"
							sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
							Change Password
						</Typography>
					</Stack>

					<Stack alignItems="center">
						<Stack
							width={{ xs: '90%', lg: '50%' }}
							gap="1rem">
							{!isUser && (
								<CustomInput
									name="access_Key"
									placeholder="Enter Your Access Key"
									type="text"
									background="#fff9e374"
									restprops={{ onChange: handleInput }}
								/>
							)}
							<CustomInput
								name="oldpassword"
								placeholder="Current Password"
								type="password"
								background="#fff9e374"
								restprops={{ onChange: handleInput }}
							/>
							<CustomInput
								name="password"
								placeholder="New Password"
								type="password"
								background="#fff9e374"
								restprops={{ onChange: handleInput }}
							/>
							<CustomInput
								name="password_confirmation"
								placeholder="Re-type New Password"
								type="password"
								background="#fff9e374"
								restprops={{ onChange: handleInput }}
							/>
							<Stack alignItems="center">
								<Link
									to={`/forgotPassword?user=${isUser}`}
									style={{
										textDecoration: 'underline',
										color: 'var(--very-light-green)',
										fontWeight: '600',
										fontSize: { xs: '1rem', md: '1.25rem' },
									}}>
									Forgot your password?
								</Link>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<Box
					width="100%"
					sx={{ fontSize: '1.25rem' }}>
					<CustomButton
						background="var(--very-dark-green)"
						text="Change Password"
						color="white"
						borderradius="0.8rem"
						padding="1rem"
						width="100%"
						restprops={{ type: 'submit', disabled: disable }}
					/>
				</Box>
			</Stack>
		</>
	);
};

export default Security;
