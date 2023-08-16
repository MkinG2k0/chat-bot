import { RouterProvider } from 'react-router-dom'

import { publicRouter } from 'core/providers/with-router/config'
import { observer } from 'mobx-react-lite'

export const WithRouter = (component: FC) => (props) => {
	return <AuthRouter />
}

const AuthRouter = observer(() => {
	return <RouterProvider router={publicRouter} />
})
