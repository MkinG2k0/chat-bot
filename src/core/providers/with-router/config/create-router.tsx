import { createBrowserRouter } from 'react-router-dom'

import { Layout } from 'entities/layout'

import { AuthenticationPage, GroupPage, MainPage, ProfilePage, SchedulePage, SettingsPage } from 'pages'
import { route } from 'core/providers/with-router/config/router'

export const publicRouter = createBrowserRouter([
	{
		element: <AuthenticationPage />,
		path: route.auth(),
	},
	{
		element: <AuthenticationPage />,
		path: route.all(),
	},
])

export const privateRouter = createBrowserRouter([
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
			{
				element: <GroupPage />,
				path: route.group(),
			},
			{
				element: <ProfilePage />,
				path: route.profile(),
			},
			{
				element: <SchedulePage />,
				path: route.schedule(),
			},
			{
				element: <SettingsPage />,
				path: route.settings(),
			},
		],
		element: <Layout />,
		path: route.main(),
	},
])
