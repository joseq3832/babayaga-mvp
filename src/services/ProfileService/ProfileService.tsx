import HttpClient from '@/lib/HttpClient'
  import { AxiosResponse } from 'axios'

  const ProfileService = {
    // Sustituir any por IResponseProfile
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    async get<T = any, R = AxiosResponse<T>>() {
      return await HttpClient.get<T, R>('profile')
    },
  }

  export default ProfileService