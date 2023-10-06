import axios, { AxiosInstance } from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

const HttpClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

HttpClient.interceptors.request.use((config) => {
  const token = ''

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default HttpClient
