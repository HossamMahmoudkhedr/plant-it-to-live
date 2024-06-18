import { Stack, Typography } from '@mui/material';
import React from 'react';
import Suggestion from '../utils/suggestion';

const Suggestions = () => {
	return (
		<Stack gap="1rem">
			<Suggestion
				user="Hossam Mahmoud"
				plant="Apple"
			/>
			<Suggestion
				user="Youssef Abdo"
				plant="Orange"
			/>
		</Stack>
	);
};

export default Suggestions;
