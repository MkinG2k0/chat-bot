import { useState } from 'react'

import { fetchMessage, scrollToBottom } from 'features/chat/lib'
import { WrapCard } from 'features/chat/ui/wrap-card'
import { ChatSlice } from 'features/chat/model'

import { Input, InputProps } from 'shared/ui/input'
import { uuid } from 'shared/lib/uuid'
import { Button } from 'shared'

import { dispatch } from 'core/store'

export const ChatInput = () => {
	const [message, setMessage] = useState('')

	const onSend = () => {
		if (message.trim()) {
			fetchMessage(message)
			dispatch(ChatSlice.messageCreate({ id: uuid(), isMy: true, text: message }))
		}
		setMessage('')
	}

	const onChange: InputProps['onChange'] = ({ target: { value } }) => {
		setMessage(value)
	}

	const onKeyDown: InputProps['onKeyDown'] = ({ code }) => {
		if (code === 'Enter') {
			onSend()
		}
	}

	return (
		<WrapCard className={'row text-black p-2  px-3'}>
			<Input
				className={'text-black'}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder={'Start typing here...'}
				value={message}
			/>
			<Button className={'p-2'} onClick={onSend} size={'icon'}>
				<img alt={'send-icon'} className={'flex-grow-0'} src={'/resources/send.svg'} />
			</Button>
		</WrapCard>
	)
}
