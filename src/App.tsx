import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from './pages/Main';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';


function App() {

	return (
		<>
			<Helmet>
				<title>Amphyx's site</title>
			</Helmet>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route
						path='/'
						element={<Main/>}
					/>
					<Route
						path='/projects'
						element={<Projects/>}
					/>
					<Route
						path='/blog'
						element={<Blog/>}
					/>
					<Route
						path='/books'
						element={<Books/>}
					/>
					<Route
						path='*'
						element={<NotFound/>}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
