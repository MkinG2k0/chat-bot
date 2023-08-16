import { chatReducer } from 'features/chat/model'

import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: { chat: chatReducer },
})

setupListeners(store.dispatch)
