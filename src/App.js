import Introduction from './components/intro/Introduction';
import Cerimony from './components/cerimony/Cerimony';
import Message from './components/rsvp/Message';
import Fiesta from './components/fiesta/Fiesta';
import { useRef, useState, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ThemeButton from './contexts/ThemeButton';
import BurgerMenu from './contexts/BurgerMenu';
import StupidScroll from './contexts/StupidScroll';

// dark theme stuff: https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb

import './App.css';

function App() {
	//THEME STUFF
	const ref = useRef(null);
	const [theme, setTheme] = useState('light');

	// Fix the theme to light, 'cause we are lovers of the light [semicit]
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	  };

	// MAP STUFF
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

	//MENU STUFF
	// const { scroll } = useLocomotiveScroll();
  
	// const scrollTo = (elementId) => {
	// 	const element = document.querySelector(elementId);
	// 	scroll && scroll.scrollTo(element);
	// };


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
					<ThemeButton onClick={toggleTheme} flipped={theme === 'dark'} />
					<BurgerMenu /*scrollTo={scrollTo}*/ className='burger-menu'/>
					<StupidScroll/>
					<Introduction /> 
					<Cerimony />
					<Fiesta id='fiesta-block'/>
					<Message />
			</div>
		</main>
	</LocomotiveScrollProvider>
	);
}

export default App;
