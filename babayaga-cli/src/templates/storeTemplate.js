const storeTemplate = (resourceName, resourceNameUppercase) =>
  `import { create } from 'zustand'
import { ${resourceName}State } from './types'

export const use${resourceNameUppercase}Store = create<${resourceName}State>((set) => ({
  ${resourceName}: null,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  set${resourceNameUppercase}: (${resourceName}: any) => {
    set({ ${resourceName}: ${resourceName} })
  },
  reset${resourceNameUppercase}State: () => {
    set({ ${resourceName}: null })
  },
}))`

module.exports = storeTemplate
