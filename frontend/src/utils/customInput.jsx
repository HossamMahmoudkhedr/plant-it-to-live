import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledInput = styled.input`
	background-color: ${(props) => props.background};
	border-radius: 1.25rem;
	padding: 20px;
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
	outline: none;
	border: none;

	&::placeholder {
		font-size: 1rem;
		font-weight: 600;
	}
`;

const CustomInput = ({
	label,
	name,
	type,
	placeholder,
	background,
	restprops,
	labelcolor,
}) => {
	return (
		<Stack sx={{ gap: '0.7rem' }}>
			<Typography
				variant="body1"
				component="label"
				sx={{
					fontWeight: '600',
					fontSize: '1.5rem',
					color: labelcolor || 'var(--black)',
				}}>
				{label}
			</Typography>
			<StyledInput
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				background={background || 'transparent'}
				{...restprops}
			/>
		</Stack>
	);
};

export default CustomInput;
