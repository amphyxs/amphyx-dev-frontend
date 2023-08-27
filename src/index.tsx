import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from './App';
import Main from './pages/Main';
import Blog from './pages/Blog';
import BlogPostView from './pages/BlogPostView';
import Projects from './pages/Projects';
import Books from './pages/Books';
import NotFound from './pages/NotFound';
import { getBlogPost } from './services/Blog';

import './css/index.scss';
import { getProjects } from './services/Projects';


const RoutesJSX = (
	<Route
        path='/'
        element={<App/>}
    >
		<Route
			index
			element={<Main/>}
		/>
		<Route
			path='blog'
		>
			<Route
				index
				element={<Blog/>}
			/>
			<Route
				path=':postId'
				element={<BlogPostView/>}
				loader={async ({ params }) => await getBlogPost(params.postId)}
				/>
		</Route>
		<Route
			path='projects'
			element={<Projects/>}
			loader={async () => await getProjects()}
		/>
		<Route
			path='books'
			element={<Books/>}
		/>
		<Route
			path='*'
			element={<NotFound/>}
		/>
	</Route>
);

const routes = createRoutesFromElements(RoutesJSX);
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
