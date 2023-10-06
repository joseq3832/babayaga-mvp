import UserService from '@/services/UserService/UserService'
import { useQuery } from '@tanstack/react-query'

const fetchUser = async () => {
  // Remove any and add interface on T value from UserService
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { data }: any = await UserService.get()
  return data
}

export const useGetUser = () => {
  return useQuery(['user'], fetchUser)
}