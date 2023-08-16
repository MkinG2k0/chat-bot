import { useRef } from 'react'

import { WrapCard } from 'features/chat/ui/wrap-card'
import { useScrollMessage } from 'features/chat/hook'
import { Message } from 'features/chat/ui/message'
import { ChatSlice } from 'features/chat/model'

export const ChatHistory = () => {
	const data = ChatSlice.useGetAll()
	const wrapMessages = useRef<HTMLDivElement>(null)

	useScrollMessage(wrapMessages, data)

	return (
		<WrapCard className={'py-4 h-full pr-2'}>
			<div
				className={'col h-full gap-2 overflow-y-auto max-h-[28rem] scroll pr-3'}
				id={'chat-history'}
				ref={wrapMessages}
			>
				{data.map((value) => (
					<Message {...value} key={value.id} />
				))}
				{data.length === 0 && (
					<div className={'row h-full items-center justify-center'}>
						<div className={'text-center px-4 text-2xl bg-primary rounded-2xl animate-view'}>No messages</div>
					</div>
				)}
			</div>
		</WrapCard>
	)
}
