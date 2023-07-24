import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios, { AxiosResponse } from 'axios';

function App() {

	const API_URL = process.env.REACT_APP_API_URL;

	const [getData, setGetData] = useState('...fetching...');

	useEffect(() => {
		interface Error {
			'message': string,
		}

		axios.get(`${API_URL}/api/`)
			.then((response : AxiosResponse<string, string>) => setGetData(response.data))
			.catch((error : Error) => alert(error.message));
			
		axios.post(`${API_URL}/api/`, { data: 'Hey, teapot' })
			.then(response => alert(response.data))
			.catch((error : Error) => alert(error.message));
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					GET result: {getData}
				</p>
				<a
					className="App-link"
					href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
					target="_blank"
					rel="noopener noreferrer"
				>
					👇👇👇👇👇👇👇👇👇👇
					<p>FREE ROBUX!!</p>
				</a>
				<code>
					10'000 ROBUX download
				</code>
			</header>
		</div>
	);
}

export default App;
