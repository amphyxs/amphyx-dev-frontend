import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';
import { getLocalTheme } from './services/Common';


const App = () => {

	const [theme, setTheme] = useState(getLocalTheme());

	return (
		<>
			<Helmet>
				<title>Amphyx's site</title>
			</Helmet>
			<ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
				<Navbar/>
				<Outlet/>
			</ThemeContext.Provider>
		</>
	);
}

export default App;
