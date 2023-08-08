export type RecursivePartial<T> = {
	[P in keyof T]?: T[P] extends (infer U)[]
		? RecursivePartial<U>[]
		: T[P] extends object | undefined
		? RecursivePartial<T[P]>
		: T[P]
}

export type WithProps<TKey extends string, TData, TProps extends object = object> = Record<TKey, TData> & {
	index?: number
	props: TProps
}
