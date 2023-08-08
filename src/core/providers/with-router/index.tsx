import { RouterProvider } from 'react-router-dom'

import { authService } from 'entities/auth/model'

import { privateRouter, publicRouter } from 'core/providers/with-router/config'
import { observer } from 'mobx-react-lite'

export const WithRouter = (component: FC) => (props) => {
	return <AuthRouter />
}

const AuthRouter = observer(() => {
	const { isAuth } = authService

	if (isAuth) {
		return <RouterProvider router={privateRouter} />
	}

	return <RouterProvider router={publicRouter} />
})
