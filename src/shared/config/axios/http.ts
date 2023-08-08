import { AxiosConfig } from './config'

import { authService } from 'entities/auth/model'

import axios from 'axios'

export const http = axios.create(AxiosConfig)

http.interceptors.request.use(
	(config) => {
		const { token } = authService

		config.headers.Authorization = `Bearer ${token}`

		return config
	},
	(error) => Promise.reject(error),
)

http.interceptors.response.use(
	(response) => response,
	(error) => {
		authService.isRefresh(error?.response?.status)

		return Promise.reject(error)
	},
)
