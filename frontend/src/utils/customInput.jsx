import React from 'react';

const CustomInput = ({ text, id, type }) => {
	return (
		<div>
			<label>{text}</label>
			<input
				id={id}
				name={id}
				type={type}
				placeholder={text}
			/>
		</div>
	);
};

export default CustomInput;
