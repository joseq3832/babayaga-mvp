import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { userState } from './types'

export const useUserStore = create(
  persist<userState>(
    (set) => ({
        user: null,
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      setUser: (user: any) => {
        set({ user: user })
      },
      resetUserState: () => {
        set({ user: null })
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)