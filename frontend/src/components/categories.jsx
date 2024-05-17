import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { categories } from '../data/categoriesData';
import RoseCircle from '../utils/roseCircle';

const Categories = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd">
			<Stack sx={{ alignItems: 'center', position: 'relative' }}>
				<RoseCircle
					bottom="0%"
					right="0%"
					width="380px"
				/>
				<RoseCircle
					bottom="0%"
					right="0%"
					width="380px"
				/>
				<RoseCircle
					top="5%"
					left="0%"
					width="380px"
				/>
				<RoseCircle
					top="5%"
					left="0%"
					width="380px"
				/>

				<Stack
					sx={{
						background: 'var(--second-linear-background)',
						width: '93%',
						gap: '4rem',
						overflow: 'hidden',
					}}>
					{categories.map((category, index) => (
						<Stack
							direction="row"
							sx={{
								alignItems: 'center',
								justifyContent: 'space-between',
								flexDirection: {
									lg: category.id % 2 !== 0 ? 'row-reverse' : 'row',
								},

								transform: {
									lg:
										index === 0
											? 'translate(25px, -25px)'
											: index === categories.length - 1
											? 'translate(25px, 25px)'
											: category.id % 2 !== 0
											? 'translateX(25px)'
											: 'translateX(-25px)',
								},
							}}>
							<Box
								sx={{
									border: '25px solid var(--light-green)',
									width: '40%',
									height: '500px',
								}}>
								<img
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									src={require(`../assets/images/${category.image}`)}
									alt={category.title}
								/>
							</Box>
							<Stack
								sx={{
									color: 'var(--white)',
									gap: '1rem',
									width: '40%',
									padding: '0 4rem',
								}}>
								<Typography
									variant="h4"
									sx={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
										color: 'inherit',
									}}>
									{category.title}
								</Typography>
								<Typography
									variant="body1"
									sx={{ color: 'inherit' }}>
									{category.description}
								</Typography>
							</Stack>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Container>
	);
};

export default Categories;
