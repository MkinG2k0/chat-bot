import { uuid } from 'shared/lib/uuid'

import { makeAutoObservable } from 'mobx'

export class Slot {
	constructor(public name: string, public id: string = uuid()) {
		makeAutoObservable(this)
	}
}
