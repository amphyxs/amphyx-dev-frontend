import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <NotFound/>,
    },
    {
        path: '/projects',
        element: <Projects/>,
        errorElement: <NotFound/>,
    },
    {
        path: '/blog',
        element: <Blog/>,
        errorElement: <NotFound/>,
    },
    {
        path: '/books',
        element: <Books/>,
        errorElement: <NotFound/>,
    },
]);

root.render(
    <React.StrictMode>
        <Navbar/>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
