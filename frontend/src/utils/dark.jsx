import { Box } from '@mui/material';
import React from 'react';

const Dark = ({ setShow }) => {
	const handleMenu = () => {
		setShow(false);
	};
	return (
		<Box
			onClick={handleMenu}
			sx={{
				backgroundColor: 'rgba(0,0,0,0.50)',
				width: '100%',
				height: '100vh',
				position: 'fixed',
				left: '0',
				top: '0',
				zIndex: '3',
				cursor: 'pointer',
			}}></Box>
	);
};

export default Dark;
