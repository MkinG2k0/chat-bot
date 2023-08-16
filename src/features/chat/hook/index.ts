import { RefObject, useEffect } from 'react'

import { IMessage } from 'features/chat/model'

export const useScrollMessage = (wrapMessages: RefObject<HTMLDivElement>, data: IMessage[]) => {
	useEffect(() => {
		if (!wrapMessages.current) {
			return
		}
		const height = wrapMessages.current.scrollHeight
		const scrollTop = wrapMessages.current.scrollTop
		if (height - scrollTop < 1000) {
			wrapMessages.current?.scrollTo({ behavior: 'smooth', left: 0, top: height })
		}
	}, [data])
}
