import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
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
    </React.StrictMode>
);
