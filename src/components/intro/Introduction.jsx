import image from '../../assets/profile.webp';
import './intro-style.css';

const Introduction = () => {
	return (
		<section
			className="intro-section"
			data-scroll-section
			data-scroll
			data-scroll-speed="2"
		>
			{/* <div className="intro-image" data-scroll-speed="5">
				<img src={image} height={700} alt="profile" />
			</div> */}
			<div className="intro-title">
				<h1 data-scroll data-scroll-speed="5">
					Elisa e Giovanni
				</h1>
				<h3>
					Ciao, ci sposiamo!
				</h3>
			</div>
		</section>
	);
};

export default Introduction;
