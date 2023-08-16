import { IMessage } from 'features/chat/model/types'

import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
	
export const messageAdapter = createEntityAdapter<IMessage>({})

const slice = createSlice({
	initialState: messageAdapter.getInitialState(),
	name: 'Chat',
	reducers: {
		messageCreate(state, { payload }: PayloadAction<IMessage>) {
			messageAdapter.addOne(state, payload)
		},
		messageUpdate(state, { payload }: PayloadAction<IMessage>) {
			const { id } = payload
			const prevText = state.entities[id]?.text || ''
			const newText = prevText.concat(payload.text)
			messageAdapter.updateOne(state, { changes: { ...payload, text: newText }, id })
		},
	},
})

export const { actions: ChatActions, reducer: chatReducer } = slice
