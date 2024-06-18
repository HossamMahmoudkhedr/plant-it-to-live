import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from './icons';
import Dark from './dark';

const Result = ({ title, desc }) => {
	return (
		<>
			<Dark />
			<Stack
				sx={{
					padding: '1rem 4rem 1rem 2rem',
					borderRadius: '1.5rem',
					backgroundColor: 'var(--body)',
					position: 'fixed',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)',
					gap: '1rem',
					zIndex: '9',
				}}>
				<Stack
					sx={{
						position: 'absolute',
						right: '-15px',
						top: '-15px',
						width: '40px',
						height: '40px',
						borderRadius: '50%',
						justifyContent: 'center',
						alignItems: 'center',
						fill: 'white',
						backgroundColor: 'var(--very-dark-green)',
						cursor: 'pointer',
					}}>
					{icons.closeIcon}
				</Stack>
				<Typography
					variant="h4"
					sx={{ fontSize: '1.5rem', fontWeight: '700' }}>
					{title}
				</Typography>
				<Typography
					variant="body1"
					sx={{ fontSize: '1rem' }}>
					{desc}
				</Typography>
			</Stack>
		</>
	);
};

export default Result;
