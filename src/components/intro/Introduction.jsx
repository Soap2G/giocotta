import './intro-style.css';
// import React, { useEffect } from 'react';

const Introduction = () => {
	
	return (
		
		<section
			className="intro-section"
			data-scroll-section
			// data-scroll 
			// data-scroll-speed="2"
		>
			<div className="intro-title">
				<h1 data-scroll data-scroll-speed="0">
					Elisa e Giovanni
				</h1>
				<p data-scroll data-scroll-speed="0">
					Ciao, ci sposiamo!
				</p>
			</div>
		</section>
	);
};

export default Introduction;


