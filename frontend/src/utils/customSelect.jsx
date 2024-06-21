import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { styled } from 'styled-components';

const StyledSelect = styled.select`
	background-color: ${(props) => props.background};
	border-radius: 1.25rem;
	padding: ${(props) => props.padding || '20px'};
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
	outline: none;
	border: none;

	&::placeholder {
		font-size: 1rem;
		font-weight: 600;
	}
`;

const CustomSelect = ({
	name,
	id,
	options,
	label,
	labelcolor,
	padding,
	width,
	background,
	staticOption,
	restprops,
}) => {
	return (
		<Stack sx={{ gap: '0.7rem', width: width || 'auto' }}>
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
			<StyledSelect
				name={name}
				id={id}
				padding={padding}
				background={background || 'transparent'}
				{...restprops}>
				<option
					selected
					disabled
					value={staticOption.value}>
					{staticOption.name}
				</option>
				{options.map((option) => (
					<option value={option.value}>{option.name}</option>
				))}
			</StyledSelect>
		</Stack>
	);
};

export default CustomSelect;
