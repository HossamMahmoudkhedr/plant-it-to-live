import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { categories } from '../data/categoriesData';
import RoseCircle from '../utils/roseCircle';
import { motion } from 'framer-motion';

const opacityVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
			type: 'spring',
		},
	},
};

const Categories = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd"
			sx={{ padding: { xs: '0', md: '0 16px' } }}>
			<Stack sx={{ alignItems: 'center', position: 'relative' }}>
				<RoseCircle
					bottom="0%"
					right={{ xs: '10%', lg: '0%' }}
					width={{ xs: '220px', lg: '380px' }}
				/>
				<RoseCircle
					bottom="0%"
					right={{ xs: '10%', lg: '0%' }}
					width={{ xs: '220px', lg: '380px' }}
				/>
				<RoseCircle
					top={{ xs: '0%', lg: '5%' }}
					left="0%"
					width={{ xs: '300px', lg: '380px' }}
				/>
				<RoseCircle
					top={{ xs: '0%', lg: '5%' }}
					left="0%"
					width={{ xs: '300px', lg: '380px' }}
				/>

				<Stack
					sx={{
						background: 'var(--second-linear-background)',
						width: { xs: '100%', md: '93%' },
						gap: '4rem',
						overflow: 'hidden',
						padding: { xs: ' 2rem 1rem ', lg: 'unset' },
					}}>
					{categories.map((category, index) => (
						<Stack
							direction="row"
							sx={{
								alignItems: 'center',
								justifyContent: 'space-between',
								flexDirection: {
									xs: 'column',
									lg: category.id % 2 !== 0 ? 'row-reverse' : 'row',
								},
								gap: { xs: '1.5rem', lg: 'unset' },

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
								component={motion.div}
								variants={opacityVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								sx={{
									border: {
										xs: '15px solid var(--light-green)',
										md: '25px solid var(--light-green)',
									},
									width: { xs: '100%', lg: '40%' },
									height: { xs: '250px', lg: '500px' },
								}}>
								<img
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									src={require(`../assets/images/${category.image}`)}
									alt={category.title}
								/>
							</Box>
							<Stack
								component={motion.div}
								variants={{
									...opacityVariants,
									visible: {
										...opacityVariants.visible,
										transition: { duration: 2, delay: 0.5, type: 'spring' },
									},
								}}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								sx={{
									color: 'var(--white)',
									gap: '1rem',
									width: { xs: '100%', lg: '40%' },
									padding: { xs: '0 1rem', md: '0 4rem' },
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
