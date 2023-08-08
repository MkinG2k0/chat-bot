import { Map } from 'react-easy-map'

import { schedule } from 'pages/schedule/model/schedule'
import { Week } from 'pages/schedule/model/week'

import { WithProps } from 'shared/interface/helper'
import { Button } from 'shared'

import { observer } from 'mobx-react-lite'

interface WeeksProps {}

export const Weeks: FC<WeeksProps> = observer(({}) => {
	return (
		<div className={'row gap-2'}>
			<Map data={schedule.data} item={WeekItem} propsIn={'week'} withIndex />
		</div>
	)
})

export const WeekItem: FC<WithProps<'week', Week>> = observer(({ index, props, week }) => {
	const variant = schedule.selectWeek === index ? 'default' : 'secondary'

	const onClick = () => {
		schedule.setSelectWeek(index)
	}

	return (
		<Button onClick={onClick} variant={variant}>
			{week.name}
		</Button>
	)
})
