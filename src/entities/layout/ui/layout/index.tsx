import { Outlet } from 'react-router-dom'

import { MainSheet } from 'entities/layout/ui/sheet'
import { Header } from 'entities/layout/ui/header'

export const Layout: FC = ({ children }) => {
	//
	// if (path === '/auth') {
	// 	return <div className={'h-[100vh] '}>{children}</div>
	// }

	return (
		<div className={'h-[100vh] col '}>
			<Header />

			<div className={'col flex-auto scroll overflow-y-auto'}>
				<div className={'flex-auto p-4'}>
					{children}

					<Outlet />
				</div>
				{/*<Footer />*/}
			</div>
		</div>
	)
}
