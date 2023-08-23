import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';


const App = () => {
	return (
		<>
			<Helmet>
				<title>Amphyx's site</title>
			</Helmet>
			<Navbar/>
			<Outlet/>
		</>
	);
}

export default App;
