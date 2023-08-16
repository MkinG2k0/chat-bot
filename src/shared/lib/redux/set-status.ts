export const setStatus = (state, action) => {
	const status = action.meta.requestStatus
	state.status = status
	if (status === 'rejected') {
		state.error = action?.payload
	} else {
		delete state.error
	}
}
