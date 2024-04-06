import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)`
	text-transform: none;

	&&:hover {
		background: ${(props) => props.background};
	}
`;

const CustomButton = ({
	text,
	background,
	borderradius,
	color,
	padding,
	width,
	border,
	restprops,
}) => {
	return (
		<StyledButton
			disableElevation
			variant="contained"
			background={background}
			{...restprops}
			sx={{
				background: background,
				borderRadius: borderradius || '0',
				border: border || 'none',
				color: color,
				padding: padding,
				width: width,
			}}>
			{text}
		</StyledButton>
	);
};

export default CustomButton;
