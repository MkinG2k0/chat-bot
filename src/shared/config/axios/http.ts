import { AxiosConfig } from './config'

import axios from 'axios'

export const http = axios.create(AxiosConfig)

http.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => Promise.reject(error),
)

http.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error)
	},
)
