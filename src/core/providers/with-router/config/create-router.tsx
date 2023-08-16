import { createBrowserRouter } from 'react-router-dom'

import { Layout } from 'entities/layout'

import { route } from 'core/providers/with-router/config/router'
import { MainPage } from 'pages'

export const publicRouter = createBrowserRouter([
	{
		children: [
			{
				element: <MainPage />,
				path: route.main(),
			},
			{
				element: <MainPage />,
				path: route.all(),
			},
		],
		element: <Layout />,
		path: route.main(),
	},
])
