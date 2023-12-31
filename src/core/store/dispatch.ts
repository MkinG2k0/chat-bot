import { store } from './store'

import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit'

export const dispatch = (func: AnyAction | AsyncThunkAction<any, any, any>) => store.dispatch(func)
