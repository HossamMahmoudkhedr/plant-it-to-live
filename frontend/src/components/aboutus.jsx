import { Box, Container, Stack, Typography } from '@mui/material';
import Heading from '../utils/heading';
import React from 'react';
import { icons } from '../utils/icons';
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
			delay: 0.5,
			type: 'spring',
		},
	},
};

const Aboutus = () => {
	return (
		<Container
			maxWidth="xl"
			className="cont-padd">
			<Stack sx={{ alignItems: 'center', gap: '2rem' }}>
				<Box sx={{ position: 'relative' }}>
					<Box
						component={motion.span}
						variants={opacityVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						sx={{
							position: 'absolute',
							top: '-1rem',
							left: { xs: '-5rem', md: '-10rem' },
						}}>
						{icons.stars}
					</Box>
					<Heading text={'About Us'} />
				</Box>
				<Stack
					sx={{
						position: 'relative',
						alignItems: 'center',
					}}>
					<Box
						component={'span'}
						sx={{
							position: 'absolute',
							bottom: { xs: '-5rem', lg: '-1rem' },
							right: { xs: '1rem', lg: '9rem' },
						}}>
						{icons.leafs}
					</Box>
					<RoseCircle
						top="-7rem"
						right={{ xs: '2rem', lg: '15rem' }}
						width="226px"
					/>
					<Typography
						component={motion.p}
						variants={opacityVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variant="body1"
						sx={{
							color: 'var(--gray)',
							textAlign: 'center',
							width: { xs: '100%', md: '60%', lg: '33.5%' },
							lineHeight: '1.8',
						}}>
						our innovative platform dedicated to helping people cultivate plants
						successfully, whether at home, in green lands, or greenhouses. Our
						mission is to empower individuals with the knowledge and tools
						necessary to grow healthy and thriving plants using cutting-edge
						artificial intelligence technology.
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Aboutus;
