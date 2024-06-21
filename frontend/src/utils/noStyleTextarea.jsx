import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
	background-color: ${(props) => props.background};
	border-radius: 0.5rem;
	padding: ${(props) => props.padding || '10px'};
	resize: none;
	outline: none;
	border: ${(props) => props.border};

	&::placeholder {
		font-size: 1rem;
		font-weight: 600;
	}
`;
const NoStyleTextarea = ({
	name,
	value,
	type,
	background,
	padding,
	contenteditable,
	border,
	restprops,
}) => {
	return (
		<StyledInput
			id={name}
			name={name}
			value={value}
			type={type}
			disabled={contenteditable}
			padding={padding}
			border={border || 'none'}
			r
			background={background || 'transparent'}
			{...restprops}
		/>
	);
};

export default NoStyleTextarea;
