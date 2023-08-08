import { useEffect } from 'react'

import { schedule } from 'pages/schedule/model/schedule'
import { SelectWeek } from 'pages/schedule/ui/week'
import { Header } from 'pages/schedule/ui'

export const SchedulePage = () => {
	useEffect(() => {
		schedule.load()
	}, [])
	return (
		<div className={'col gap-2'}>
			<Header />
			<SelectWeek />
		</div>
	)
}
