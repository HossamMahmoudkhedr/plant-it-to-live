import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { fetchApi } from '../utils/fetchFromAPI';
import Suggestion from '../utils/suggestion';
import { Link } from 'react-router-dom';

const UserSuggestions = () => {
	const [suggestions, setSuggestions] = useState([]);
	const [selectedPlant, setSelectedPlant] = useState({});
	const [pagination, setPagination] = useState([]);
	const [show, setShow] = useState(false);
	useEffect(() => {
		fetchApi(`usersuggestions/?token=${Cookies.get('user')}`).then((data) => {
			setSuggestions(data.data.data);
			setPagination(
				Array.from({ length: parseInt(data.data.total) }, (_, i) => i + 1)
			);
		});
	}, []);
	return (
		<Container
			maxWidth="lg"
			sx={{ marginTop: '2rem' }}>
			<Box
				sx={{
					position: 'fixed',
					left: '20px',
					bottom: '20px',
					backgroundColor: '#aaa',

					padding: '1rem',
					borderRadius: '1rem',
				}}>
				<Link
					style={{ color: 'white' }}
					to="/userProfile">
					Back to your profile
				</Link>
			</Box>
			<Stack gap="1rem">
				{suggestions.length === 0 && (
					<Stack
						width="100%"
						marginTop="2rem"
						direction="row"
						justifyContent="center">
						<Typography
							variant="body1"
							sx={{ fontSize: '1rem' }}>
							There is no suggestions
						</Typography>
					</Stack>
				)}
				{suggestions &&
					suggestions.map((suggestion) => (
						<Stack
							direction={{ xs: 'column', lg: 'row' }}
							alignItems={{ xs: 'center', lg: 'unset' }}
							gap="1rem">
							<Suggestion
								user=""
								plant={suggestion['common_name']}
								restprops={{
									onClick: () => {
										// handleClick(suggestion.id);
									},
								}}
							/>
							<Stack
								sx={{
									background: 'white',
									borderRadius: '1rem',
									width: { xs: '100%', lg: '15%' },
									justifyContent: 'center',
									alignItems: 'center',
									padding: { xs: '1rem 0 ', lg: 'unset' },
								}}>
								<Typography
									variant="body1"
									sx={{
										color: suggestion.approved ? 'green' : 'red',
									}}>
									{suggestion.approved ? 'Approved' : 'Not Approved'}
								</Typography>
							</Stack>
						</Stack>
					))}
			</Stack>
			<Stack
				direction="row"
				justifyContent={'center'}
				gap="1rem"
				alignItems="center"
				margin="2rem 0">
				{pagination.map((el) => (
					<Box
						sx={{
							backgroundColor: '#aaa',
							padding: '1rem',
							cursor: 'pointer',
						}}
						onClick={() => {
							fetchApi(
								`usersuggestions/?token=${Cookies.get('user')}&page=${el}`
							).then((data) => {
								setSuggestions(data.data.data);
								console.log(data.data.total);
							});
						}}>
						{el}
					</Box>
				))}
			</Stack>
		</Container>
	);
};

export default UserSuggestions;
