import { Day } from 'pages/schedule/model/day'

import { uuid } from 'shared/lib/uuid'

import { makeAutoObservable } from 'mobx'

export class Week {
	data: [Day, Day, Day, Day, Day, Day, Day] = [
		new Day('Пон'),
		new Day('Вт'),
		new Day('Ср'),
		new Day('Чт'),
		new Day('Пят'),
		new Day('Суб'),
		new Day('Вс'),
	]

	constructor(public name: string, public id: string = uuid()) {
		makeAutoObservable(this)
	}

	test() {}
}
