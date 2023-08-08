import { FC } from 'react'

import { Weeks } from 'pages/schedule/ui/weeks'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className={'row'}>
			<Weeks />
		</div>
	)
}
