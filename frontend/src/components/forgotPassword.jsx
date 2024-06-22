import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { fetchApi } from '../utils/fetchFromAPI';
import AlertMessage from '../utils/alertMessage';
import Loading from '../utils/loading';

const ForgotPassword = () => {
	const [isUser, setIsUser] = useState();
	const [disable, setDisable] = useState(true);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const [email, setEmail] = useState('');
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleInput = (e) => {
		let value = e.target.value;
		setEmail(value);
	};
	useEffect(() => {
		setIsUser(JSON.parse(window.location.href.split('?')[1].split('=')[1]));
		if (email) {
			setDisable(false);
		} else {
			setDisable(true);
		}
	}, [email]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		if (isUser) {
			fetchApi(`forgetpassword/?email=${email}`)
				.then((data) => {
					console.log(data);
					setMessage(data.data);
					setShow(true);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setMessage(error.message);
					setError(true);
					setLoading(false);
				});
		} else {
			fetchApi(`admin/forgetpassword?email=${email}`)
				.then((data) => {
					console.log(data);
					setMessage(data.data);
					setShow(true);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setMessage(error.message);
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

						// backgroundColor: 'white',
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
							<CustomInput
								name="email"
								placeholder="Enter Your Email"
								type="email"
								background="#fff9e374"
								restprops={{ onChange: handleInput }}
							/>
							{/* <CustomInput
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
						/> */}
						</Stack>
					</Stack>
				</Stack>
				<Box
					width="50%"
					sx={{ fontSize: '1.25rem', alignSelf: 'center' }}>
					<CustomButton
						background="var(--very-dark-green)"
						text="submit"
						color="white"
						borderradius="0.8rem"
						padding="1rem"
						width="100%"
						restprops={{
							type: 'submit',
							disabled: disable,
							onSubmit: handleSubmit,
						}}
					/>
				</Box>
			</Stack>
		</>
	);
};

export default ForgotPassword;
