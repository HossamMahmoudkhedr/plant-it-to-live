import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

const StyledImage = styled(Box)`
	position: relative;
	border-radius: ${(props) => props.radius};
	box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.25);

	&::before {
		content: '';
		position: absolute;
		top: ${(props) => props.top};
		left: ${(props) => props.left};
		right: ${(props) => props.right};
		bottom: ${(props) => props.bottom};
		width: ${(props) => props.childwidth};
		height: ${(props) => props.childheight};
		border-radius: inherit;
		border: 1.5px solid var(--black);
		z-index: -1;
	}
`;

const ImageFrame = ({
	image,
	radius,
	imgwidth,
	imgheight,
	left,
	right,
	top,
	bottom,
	childwidth,
	childheight,
}) => {
	return (
		<Box>
			<StyledImage
				radius={radius}
				width={imgwidth}
				height={imgheight}
				left={left || 'unset'}
				right={right || 'unset'}
				bottom={bottom || 'unset'}
				childwidth={childwidth || '100%'}
				childheight={childheight || '100%'}
				top={top || 'unset'}>
				<img
					width="100%"
					height="100%"
					style={{ objectFit: 'cover', borderRadius: 'inherit' }}
					src={require(`../assets/images/${image}`)}
					alt=""
				/>
			</StyledImage>
		</Box>
	);
};

export default ImageFrame;
