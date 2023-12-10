import Introduction from './components/intro/Introduction';
import Cerimony from './components/cerimony/Cerimony';
import { Message } from './components/rsvp/Message';
import Fiesta from './components/fiesta/Fiesta';
import Lista from './components/lista/lista';
import { useRef, useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ThemeButton from './contexts/ThemeButton';
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { Routes, Route } from 'react-router-dom';
import BlogList from './components/blog/BlogList';
import BlogPostPage from './components/blog/BlogPostPage';



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
		<ParallaxProvider>
		  <main ref={ref}>
			<div className={`theme-${theme}`}>
			  <ThemeButton onClick={toggleTheme} flipped={theme === 'dark'} />
			  
			  <Routes>
				<Route path="/" element={
				  <>
					<Introduction /> 
					<Cerimony />
					<Fiesta />
					<Lista />
					<Message />
				  </>
				}/>
				<Route path="/blog" element={
				<>
				<Header />
				<BlogList />
				</>
				} />
				<Route path="/blog/:slug" element={
				<>
				<Header />
				<BlogPostPage />
				</>
				} />
			  </Routes>
			  
			</div>
			<Footer />
		  </main>
		</ParallaxProvider>
	  );
	}
	
	export default App;
