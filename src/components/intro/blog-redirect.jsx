import './intro-style.css';
import izma from '../../assets/yzma.gif';
import { Link } from "react-router-dom";

const Introduction = () => {
	
	return (
		
		<section
			className="cerimony-section"
		>
			<div className="cerimony-title">
				<h1>
					Cosa ci faccio qui?
				</h1>
			</div>
			<p style={{ fontSize: "1.7rem" }}>
				Potresti essere qua per caso, oppure potresti essere qua perchè vuoi dare una occhiata al nostro diario di viaggio!
			</p>
			<div className='blog-button'>
				<Link
					className="nav-link active"
					style={{ 
						fontFamily: "'Bellefair', serif",
						fontSize: "2rem",
						fontWeight: "400",
						color: 'var(--text-color)',
						margin: "0.5em",
						cursor: "pointer",
						border: "1"
					}}
					aria-current="page"
					to="/blog"
					>
					vai al diario
				</Link>
			</div>
			<img style= {{marginBottom: "3em", marginTop: "1em", borderRadius: "10px", maxWidth: "95%"}} src={izma} alt=""/>
		</section>
	);
};

export default Introduction;


