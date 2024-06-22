import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';

const ForgetPasswordSecond = ({ isUser }) => {
	const [disable, setDisable] = useState(true);
	const handleInput = (e) => {};
	const handleSubmit = (e) => {};
	return (
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
	);
};

export default ForgetPasswordSecond;
