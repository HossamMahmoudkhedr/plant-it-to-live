import { Stack, Typography } from '@mui/material';
import React from 'react';

const Suggestion = ({ user, plant, restprops }) => {
	return (
		<Stack
			direction={{ xs: 'column', lg: 'row' }}
			sx={{
				width: '100%',
				padding: '1rem 2rem',
				justifyContent: 'space-between',
				backgroundColor: 'white',
				borderRadius: '0.8rem',
				cursor: 'pointer',
				gap: { xs: '1rem', lg: 'unset' },
				'&:hover': { backgroundColor: 'var(--very-light-gray)' },
			}}
			{...restprops}>
			{user && (
				<Stack
					direction={{ xs: 'column', lg: 'row' }}
					alignItems={'center'}
					gap={'0.5rem'}>
					<Typography
						variant="body1"
						sx={{ fontWeight: 'bold' }}>
						UserName:
					</Typography>
					<Typography variant="body1">{user}</Typography>
				</Stack>
			)}
			<Stack
				direction={{ xs: 'column', lg: 'row' }}
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
