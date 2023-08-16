import { ChatHistory } from 'features/chat/ui/chat-history'
import { ChatInput } from 'features/chat/ui/chat-input'

export const Chat = () => {
	return (
		<div className={'col gap-5 flex-auto'}>
			<ChatHistory />
			<ChatInput />
		</div>
	)
}
