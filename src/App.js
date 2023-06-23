import Introduction from './components/intro/Introduction';
import Cerimony from './components/cerimony/Cerimony';
import Message from './components/rsvp/Message';
import Fiesta from './components/fiesta/Fiesta';
import { useRef, useState, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import MoonIcon from './assets/moon.svg';
// import SunIcon from './assets/sun.svg';
import ThemeIcon from './assets/logo-icon.png';

// dark theme stuff: https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb

import './App.css';

function App() {
	const ref = useRef(null);
	const [theme, setTheme] = useState('light');

	// Fix the theme to light, 'cause we are lovers of the light [semicit]
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	  };

	useEffect(() => {
	document.body.dataset.theme = theme;
	}, [theme]);

	const options = {
		smooth: true,
		multiplier: 1,
		smartphone: {
			smooth: true,
		},
	};

	//===========================================================================
	//===========================================================================
	// Set the viewport height to the real one, not the 100vh bullshit
	useEffect(() => {
		const setBodyHeight = () => {
		  const vh = window.innerHeight;
		  document.documentElement.style.setProperty('--vh', `${vh}px`);
		};
	
		// Run once to set the body height
		setBodyHeight();
	
		// Run the function whenever the window is resized
		window.addEventListener('resize', setBodyHeight);
	
		// Cleanup the event listener when component unmounts
		return () => {
		  window.removeEventListener('resize', setBodyHeight);
		};
	  }, []);
	//===========================================================================
	//===========================================================================

	return (
	<LocomotiveScrollProvider options={options} watchScroll containerRef={ref}>
		<main data-scroll-container ref={ref}>
			<div className={`theme-${theme}`}>
			<button 
				onClick={toggleTheme}
				style={{
					background: 'transparent',
					border: 'none',
					cursor: 'pointer',
					position: 'fixed', // This will fix the position of the button.
					top: '15px', // This will set the distance from the top.
					left: '15px', // This will set the distance from the left side.
					zIndex: 1000
				}}
				>
				{theme === 'light' ? <img src={ThemeIcon} alt="Moon for dark theme" style={{ width: '48px', height: '48px' }} /> : <img src={ThemeIcon} alt="Sun for light theme" style={{ width: '48px', height: '48px' }}/>}
			</button>
					<Introduction /> 
					<Cerimony />
					<Fiesta />
					<Message />
			</div>
		</main>
	</LocomotiveScrollProvider>
	);
}

export default App;
