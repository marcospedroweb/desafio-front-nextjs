import axios from 'axios'
import { INTERNAL_API_ROUTE } from './config'

const api = axios.create({
  baseURL: INTERNAL_API_ROUTE || '/api',
})

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default api
