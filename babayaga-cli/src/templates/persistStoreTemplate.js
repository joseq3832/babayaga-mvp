const persistStoreTemplate = (resourceName, resourceNameUppercase) =>
  `import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ${resourceName}State } from './types'

export const use${resourceNameUppercase}Store = create(
  persist<${resourceName}State>(
    (set) => ({
        ${resourceName}: null,
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      set${resourceNameUppercase}: (${resourceName}: any) => {
        set({ ${resourceName}: ${resourceName} })
      },
      reset${resourceNameUppercase}State: () => {
        set({ ${resourceName}: null })
      },
    }),
    {
      name: '${resourceName}',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)`

module.exports = persistStoreTemplate
