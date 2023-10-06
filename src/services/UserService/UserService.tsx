import HttpClient from '@/lib/HttpClient'
import { AxiosResponse } from 'axios'

const UserService = {
  // Sustituir any por IResponseUser
  async request<T = any, R = AxiosResponse<T>>() {
    return await HttpClient.get<T, R>('user')
  },
}

export default UserService
