import { Provider } from 'react-redux'

import { store } from 'core/store'

export const WithStore = (component: FC) => (props) => {
	return <Provider store={store}>{component(props)}</Provider>
}
