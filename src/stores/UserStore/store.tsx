import { create } from 'zustand'
import { userState } from './types'

export const useUserStore = create<userState>((set) => ({
  user: null,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setUser: (user: any) => {
    set({ user: user })
  },
  resetUserState: () => {
    set({ user: null })
  },
}))
