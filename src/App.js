import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    const [getData, setGetData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(response => setGetData(response.data));
            
        axios.post('http://localhost:8000/', { data: 'Hey, teapot' })
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
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
