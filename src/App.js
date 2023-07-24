import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
    
    const API_URL = process.env.REACT_APP_API_URL;
    
    const [getData, setGetData] = useState('...fetching...');
    
    useEffect(() => {
        axios.get(`${API_URL}/api/`)
            .then(response => setGetData(response.data));
            
        axios.post(`${API_URL}/api/`, { data: 'Hey, teapot' })
            .then(response => alert(response.data));    
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
                    Learn React
                    <p>Hello, Ssang</p>
                </a>
                <code>
                    print('OGO')
                </code>
            </header>
        </div>
    );
}

export default App;
