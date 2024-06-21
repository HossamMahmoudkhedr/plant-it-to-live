import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	background-color: ${(props) => props.background};
	border-radius: 0.5rem;
	padding: ${(props) => props.padding || '10px'};

	outline: none;
	border: ${(props) => props.border};

	&::placeholder {
		font-size: 1rem;
		font-weight: 600;
	}
`;

const NoStyleInput = ({
	name,
	value,
	type,
	background,
	padding,
	border,
	contenteditable,
	restprops,
}) => {
	return (
		<StyledInput
			id={name}
			name={name}
			type={type}
			padding={padding}
			disabled={contenteditable}
			value={value}
			border={border || 'none'}
			background={background || 'transparent'}
			{...restprops}
		/>
	);
};

export default NoStyleInput;
