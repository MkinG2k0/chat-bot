export interface IStatus<T> {
	data?: T
	error?: TError
	status?: TStatus
}

export type TStatus = 'fulfilled' | 'idle' | 'pending' | 'rejected'
export type TError = null | string | undefined
