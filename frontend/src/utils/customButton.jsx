import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)`
	display: felx;
	align-items: center;
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
	boxshadow,
	icon,
	icHeight,
	restprops,
}) => {
	return (
		<StyledButton
			disableElevation
			variant="contained"
			background={background || 'transparent'}
			{...restprops}
			sx={{
				background: background || 'transparent',
				borderRadius: borderradius || '0',
				border: border || 'none',
				padding: padding,
				width: width,
				fontWeight: 'inherit',
				fontSize: 'inherit',
				boxShadow: boxshadow,
				gap: icon ? '1rem' : 'unset',
			}}>
			{icon && (
				<Box
					component="span"
					height={icHeight}>
					{icon}
				</Box>
			)}
			<Typography
				variant="body1"
				sx={{ color: color, fontSize: 'inherit', fontWeight: 'inherit' }}>
				{text}
			</Typography>
		</StyledButton>
	);
};

export default CustomButton;
