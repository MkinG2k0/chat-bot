import { FC } from 'react'

import { Container, Header } from 'pages/main/ui'

import { Chat } from 'features/chat/ui/chat'

export const MainPage: FC = ({}) => {
	return (
		<div className={'col-2 flex-auto h-full items-center'}>
			<Container>
				<div className={'col gap-5 h-full'}>
					<Header />
					<Chat />
				</div>
			</Container>
		</div>
	)
}

export default MainPage
