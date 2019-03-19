import React from 'react';
import './home.css';
import { Button } from 'core/component';
import { IoLogoGithub } from 'react-icons/io';
import FeatureBlock from "./components/feature-block";
import Footer from "./components/footer";

const FEATURES = [
	{
		img: require('./img/concise'),
		title: 'Concise',
	},{
		img: require('./img/direct'),
		title: 'Direct',
	},{
		img: require('./img/elegant'),
		title: 'Elegant',
	},{
		img: require('./img/adaptable'),
		title: 'Adaptable',
	},
];

const Home = () => {

	return (
		<div className="home">
			<div className="home__slider">
				<div className="home__logo-container">
					<img src={require('../../assets/logo.svg')} alt="logo" className="home__logo"/>
				</div>
				<div>
					<h1 className="home__title">Tiny UI</h1>
					<h2 className="home__subtitle">A Friendly UI Component Set for React</h2>
					<div className="home__btn-group">
						<Button ripple color="primary" round size="lg" style={{width: '140px'}}>Start</Button>
						<Button ripple round size="lg" icon={<IoLogoGithub/>}>GitHub</Button>
					</div>
				</div>
			</div>

			<h1 className="home__feature-title">Design Principle</h1>
			<div className="home__features">
				{FEATURES.map((feature, idx) => (
					<FeatureBlock key={idx} img={feature.img} title={feature.title} desc={feature.desc}/>
				))}
			</div>

			<Footer />
		</div>
	);
};

export default Home;