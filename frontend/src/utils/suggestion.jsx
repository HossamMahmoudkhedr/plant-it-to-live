import { Stack, Typography } from '@mui/material';
import React from 'react';

const Suggestion = ({ user, plant }) => {
	return (
		<Stack
			direction="row"
			sx={{
				width: '100%',
				padding: '1rem 2rem',
				justifyContent: 'space-between',
				backgroundColor: 'white',
				borderRadius: '0.8rem',
				cursor: 'pointer',
				'&:hover': { backgroundColor: 'var(--very-light-gray)' },
			}}>
			<Stack
				direction="row"
				alignItems={'center'}
				gap={'0.5rem'}>
				<Typography
					variant="body1"
					sx={{ fontWeight: 'bold' }}>
					UserName:
				</Typography>
				<Typography variant="body1">{user}</Typography>
			</Stack>
			<Stack
				direction="row"
				alignItems={'center'}
				gap={'0.5rem'}>
				<Typography
					variant="body1"
					sx={{ fontWeight: 'bold' }}>
					Plant name:
				</Typography>
				<Typography variant="body1">{plant}</Typography>
			</Stack>
		</Stack>
	);
};

export default Suggestion;
