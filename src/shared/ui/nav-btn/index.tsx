import { Link } from 'react-router-dom'

import { Button, ButtonProps } from 'shared/ui/button'

export interface NavBtnProps extends ButtonProps {
	classNameNav?: string
	to: string
}

export const NavBtn: FC<PropsWithChildren<NavBtnProps>> = ({ children, classNameNav, to, ...props }) => {
	return (
		<Link className={classNameNav} to={to}>
			<Button {...props}>{children}</Button>
		</Link>
	)
}
