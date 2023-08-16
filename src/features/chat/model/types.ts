import { IStatus } from 'shared/interface/redux'

export interface ChatModel {
	messages: IMessage[]
}

export interface IMessage {
	id: string
	isMy: boolean
	text: string
}

export interface IChunkMessage {
	status: 'content' | 'done'
	value: null | string
}
