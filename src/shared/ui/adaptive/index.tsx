interface AdaptiveProps {
	className?: string
}

export const Mobile: FC<PropsWithChildren<AdaptiveProps>> = ({ children, className = '' }) => {
	return <div className={`only-sm ${className}`}>{children} </div>
}

export const Large: FC<PropsWithChildren<AdaptiveProps>> = ({ children, className = '' }) => {
	return <div className={`only-lg ${className}`}>{children} </div>
}

export const Medium: FC<PropsWithChildren<AdaptiveProps>> = ({ children, className = '' }) => {
	return <div className={`only-md ${className}`}>{children} </div>
}
export const XLarge: FC<PropsWithChildren<AdaptiveProps>> = ({ children, className = '' }) => {
	return <div className={`only-xl ${className}`}>{children} </div>
}
