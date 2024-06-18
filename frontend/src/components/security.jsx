import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import styled from 'styled-components';
import CustomInput from '../utils/customInput';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';

const Security = () => {
	return (
		<Stack gap="1rem">
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
						width="50%"
						gap="1rem">
						<CustomInput
							name="currPass"
							placeholder="Current Password"
							type="password"
							background="#fff9e374"
						/>
						<CustomInput
							name="newPass"
							placeholder="New Password"
							type="password"
							background="#fff9e374"
						/>
						<CustomInput
							name="confirmPass"
							placeholder="Re-type New Password"
							type="password"
							background="#fff9e374"
						/>
						<Stack alignItems="center">
							<a
								style={{
									textDecoration: 'underline',
									color: 'var(--very-light-green)',
									fontWeight: '600',
									fontSize: { xs: '1rem', md: '1.25rem' },
								}}
								href="">
								Forgot your password?
							</a>
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
				/>
			</Box>
		</Stack>
	);
};

export default Security;
