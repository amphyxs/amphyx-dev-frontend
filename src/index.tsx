import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/projects',
        element: <Projects/>
    },
    {
        path: '/blog',
        element: <Blog/>
    },
    {
        path: '/books',
        element: <Books/>
    },
]);

root.render(
    <React.StrictMode>
        <Navbar/>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
