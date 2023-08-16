import { IMessage } from 'features/chat/model'

import { cn } from 'shared'

export const Message: FC<IMessage> = ({ isMy, text }) => {
	const clWrap = cn('row w-full gap-2 animate-view ', { 'justify-end': isMy })
	const clMessage = cn('row bg-[var(--bg-chat)] text-black rounded-3xl px-4 text-lg max-w-[50%] py-2 ', {
		'bg-primary text-white': isMy,
	})

	if (isMy) {
		return (
			<div className={clWrap}>
				<div className={clMessage}>{text}</div>
				<Avatar className={'bg-[var(--bg-chat)] text-accent'} text={'i'} />
			</div>
		)
	}

	return (
		<div className={clWrap}>
			<Avatar className={'bg-primary'} text={'B'} />
			<div className={clMessage}>{text}</div>
		</div>
	)
}

const Avatar = ({ className = '', text }: { className?: string; text: string }) => {
	return (
		<div className={'w-8 h-8 rounded-full relative'.concat(' ', className)}>
			<span className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>{text}</span>
		</div>
	)
}
