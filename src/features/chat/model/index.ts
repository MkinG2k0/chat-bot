import { FileNameHooks } from './get-hook'
import { ChatActions } from './slice'

export const ChatSlice = {
	...ChatActions,
	...FileNameHooks,
}

export { chatReducer } from './slice'
export * from './types'
