import Introduction from './components/intro/Introduction';
// import Work from './components/work/Work';
import Cerimony from './components/cerimony/Cerimony';
import Message from './components/rsvp/Message';
import { useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// dark theme stuff: https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb

import { ThemeContext } from './contexts/theme-context';
// import Layout from './layout';

import './App.css';


function App() {
	const ref = useRef(null);

	const [theme, setTheme] = useState('light');

	// const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

	// const [theme, setTheme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');

	const options = {
		smooth: true,
		multiplier: 1,
		smartphone: {
			smooth: true,
		},
	};

	return (
	<LocomotiveScrollProvider options={options} containerRef={ref}>
			<main data-scroll-container ref={ref}>
				<ThemeContext.Provider value={{ theme, setTheme }}>
					<div className={`theme-${theme}`}>
						{/* <Layout>  */}
							<Introduction /> 
							<Cerimony />
							<Message />
						{/* </Layout> */}
					</div>
				</ThemeContext.Provider>
			</main>
	</LocomotiveScrollProvider>
	);
}

export default App;
