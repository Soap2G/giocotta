import './intro-style.css';
import { Parallax } from "react-scroll-parallax";

const Introduction = () => {
	
	return (
		
		<section
			className="intro-section"
		>
			<Parallax speed={-15}>
				<div className="intro-title">
					<h1>
						Elisa e Giovanni
					</h1>
					<p style={{ fontSize: "1.7rem" }}>
						Ciao, ci sposiamo!
					</p>
				</div>
			</Parallax>
		</section>
	);
};

export default Introduction;


