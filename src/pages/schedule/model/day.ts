import { Slot } from 'pages/schedule/model/slot'

import { uuid } from 'shared/lib/uuid'

import { makeAutoObservable } from 'mobx'

export class Day {
	data: Slot[] = []

	constructor(public name: string, public id: string = uuid()) {
		makeAutoObservable(this)

		this.data = new Array(4).fill(0).map((value, index) => new Slot((index + 1).toString()))
	}
}
