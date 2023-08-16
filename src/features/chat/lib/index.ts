import { messageRegex, messageUrl } from 'features/chat/config'
import { ChatSlice } from 'features/chat/model'

import { uuid } from 'shared/lib/uuid'

import { dispatch } from 'core/store'

export const fetchMessage = (message: string) => {
	let isFirstChunk = false
	const generateID = uuid()

	const onLoadChunk = (chunk: string) => {
		let values = ''
		let match

		while ((match = messageRegex.exec(chunk)) !== null) {
			values += match[1]
		}

		if (!isFirstChunk) {
			isFirstChunk = true
			dispatch(ChatSlice.messageCreate({ id: generateID, isMy: false, text: values }))
		} else {
			dispatch(ChatSlice.messageUpdate({ id: generateID, isMy: false, text: values }))
		}
	}

	fetch(messageUrl, {
		body: JSON.stringify({ message }),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
	}).then(async (response) => {
		const body = response.body
		if (!body) {
			return
		}
		const reader = body.pipeThrough(new TextDecoderStream('utf-8')).getReader()

		// eslint-disable-next-line no-constant-condition
		while (true) {
			const { done, value } = await reader.read()
			if (done) {
				break
			}
			onLoadChunk(value)
		}
	})

	return
}

export const scrollToBottom = (id: string) => {
	const chatHistory = document.getElementById(id)
	chatHistory?.scrollTo({ behavior: 'smooth', left: 0, top: chatHistory.scrollHeight })
}
