import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { fetchApi } from '../utils/fetchFromAPI';
import AlertMessage from '../utils/alertMessage';

const ForgetPasswordSecond = () => {
	const [token, setToken] = useState('');
	const [isUser, setIsUser] = useState(false);
	const [disable, setDisable] = useState(true);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const [passwordData, setPasswordData] = useState({});
	const [show, setShow] = useState(false);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setPasswordData((prevData) => ({ ...prevData, [name]: value }));
	};

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		setToken(urlParams.get('token'));
		setIsUser(JSON.parse(urlParams.get('user')));

		if (Object.keys(passwordData).length > 0) {
			setDisable(false);
		} else {
			setDisable(true);
		}
	}, [passwordData]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(token, isUser);
		const formData = new FormData();
		formData.append('password', passwordData['password']);
		formData.append('confirm_password', passwordData['confirm_password']);

		if (isUser) {
			fetchApi(`resetpassword?token=${token}`, 'POST', formData)
				.then((data) => {
					console.log(data);
					setMessage(data.data.message || 'Password reset successful');
					setShow(true);
				})
				.catch((error) => {
					console.log(error);
					setMessage(error.message || 'An error occurred');
					setError(true);
				});
		} else {
			formData.append('access_Key', passwordData['access_Key']);
			fetchApi(`admin/resetpassword?token=${token}`, 'POST', formData)
				.then((data) => {
					console.log(data);
					setMessage(data.data.message || 'Password reset successful');
					setShow(true);
				})
				.catch((error) => {
					console.log(error);
					setMessage(error.message || 'An error occurred');
					setError(true);
				});
		}
	};

	return (
		<>
			{show && (
				<AlertMessage
					setShow={setShow}
					message={message}
					error={error}
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
					}}>
					<Stack
						direction="row"
						sx={{ justifyContent: 'center' }}>
						<Typography
							variant="h3"
							sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
							Reset Your Password
						</Typography>
					</Stack>

					<Stack alignItems="center">
						<Stack
							width="50%"
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
								name="password"
								placeholder="New Password"
								type="password"
								background="#fff9e374"
								restprops={{ onChange: handleInput }}
							/>
							<CustomInput
								name="confirm_password"
								placeholder="Re-type New Password"
								type="password"
								background="#fff9e374"
								restprops={{ onChange: handleInput }}
							/>
						</Stack>
					</Stack>
				</Stack>
				<Box
					width="50%"
					sx={{ fontSize: '1.25rem', alignSelf: 'center' }}>
					<CustomButton
						background="var(--very-dark-green)"
						text="Submit"
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

export default ForgetPasswordSecond;
