import ProfileService from '@/services/ProfileService/ProfileService'
import { useQuery } from '@tanstack/react-query'

const fetchProfile = async () => {
  // Remove any and add interface on T value from ProfileService
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { data }: any = await ProfileService.get()
  return data
}

export const useGetProfile = () => {
  return useQuery(['profile'], fetchProfile)
}