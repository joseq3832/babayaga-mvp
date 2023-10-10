import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { profileState } from './types'

export const useProfileStore = create(
  persist<profileState>(
    (set) => ({
      profile: null,
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      setProfile: (profile: any) => {
        set({ profile: profile })
      },
      resetProfileState: () => {
        set({ profile: null })
      },
    }),
    {
      name: 'profile',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
