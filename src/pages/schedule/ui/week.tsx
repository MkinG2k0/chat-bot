import { Map } from 'react-easy-map'
import { FC } from 'react'

import { schedule } from 'pages/schedule/model/schedule'
import { Slot } from 'pages/schedule/model/slot'
import { Day } from 'pages/schedule/model/day'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'shared/ui/card'
import { WithProps } from 'shared/interface/helper'

import { observer } from 'mobx-react-lite'

interface WeekProps {}

export const SelectWeek: FC<WeekProps> = ({}) => {
	const week = schedule.getSelectWeek()

	return (
		<div className={'row gap-2 flex-wrap'}>
			<Map data={week.data} item={DayItem} propsIn={'day'} />
		</div>
	)
}

const DayItem: FC<WithProps<'day', Day>> = observer(({ day }) => {
	return (
		<Card className={'w-[clamp(100px,100%,200px)] flex-auto'}>
			<CardHeader>
				<CardTitle>{day.name}</CardTitle>
			</CardHeader>
			<CardContent>
				<Map data={day.data} item={SlotItem} propsIn={'slot'} />
			</CardContent>
			{/*<CardFooter>*/}
			{/*	<p>Card Footer</p>*/}
			{/*</CardFooter>*/}
		</Card>
	)
})

const SlotItem: FC<WithProps<'slot', Slot>> = observer(({ slot }) => {
	return <div>{slot.name}</div>
})
