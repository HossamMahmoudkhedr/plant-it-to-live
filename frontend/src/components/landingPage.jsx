import React from 'react';
import Hero from './hero';
import Aboutus from './aboutus';
import Features from './features';
import Categories from './categories';
import Team from './team';
import Footer from './footer';

const LandingPage = () => {
	return (
		<>
			<Hero />
			<Aboutus />
			<Categories />
			<Features />
			<Team />
			<Footer />
		</>
	);
};

export default LandingPage;
