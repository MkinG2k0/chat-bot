import { Week } from 'pages/schedule/model/week'

import { makeAutoObservable } from 'mobx'

export class Schedule {
	data: Week[] = [new Week('default')]
	selectWeek = 0

	constructor() {
		makeAutoObservable(this)
	}

	getSelectWeek() {
		return this.data[this.selectWeek]
	}
	async load() {
		// Mock
		this.data = new Array(4).fill('').map((_, index) => new Week((index + 1).toString()))
	}

	setSelectWeek(index?: number) {
		this.selectWeek = index ?? 0
	}
}

export const schedule = new Schedule()
