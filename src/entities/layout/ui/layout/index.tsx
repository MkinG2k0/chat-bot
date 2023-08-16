import { Outlet } from 'react-router-dom'

export const Layout: FC = ({ children }) => {
	return (
		<div className={'h-[100vh] col '}>
			<div className={'col flex-auto '}>
				<div className={'flex-auto p-4 overflow-y-auto overflow-x-hidden'}>
					{children}
					<Outlet />
				</div>
			</div>
		</div>
	)
}
