import './intro-style.css';
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from 'react-i18next';

const Introduction = () => {
	const { t } = useTranslation();
	
	return (
		
		<section
			className="intro-section"
		>
			<Parallax speed={-15}>
				<div className="intro-title">
					<h1>
						Elisa e Giovanni
					</h1>
				</div>
				<p style={{ fontSize: "1.7rem" }}>
					{t('greeting')}
				</p>
			</Parallax>
		</section>
	);
};

export default Introduction;


