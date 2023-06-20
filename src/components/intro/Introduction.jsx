import './intro-style.css';

const Introduction = () => {
	return (
		<section
			className="intro-section"
			data-scroll-section
		>
			<div className="intro-title">
				<h1 data-scroll data-scroll-speed="2">
					Elisa e Giovanni
				</h1>
				<p data-scroll data-scroll-speed="2">
					Ciao, ci sposiamo!
				</p>
			</div>
		</section>
	);
};

export default Introduction;


