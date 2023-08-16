interface WrapCardProps {
	className?: string
}

export const WrapCard: FC<WrapCardProps> = ({ children, className }) => {
	return <div className={'bg-white p-3 rounded-2xl '.concat(className || '')}>{children}</div>
}
