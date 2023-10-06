const singleStoreTemplate = (resourceName, resourceNameUppercase) =>
  `import { create } from 'zustand'

export const use${resourceNameUppercase}Store = create((set) => ({
  ${resourceName}: null,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  set${resourceNameUppercase}: (${resourceName}: any) => {
    set({ ${resourceName}: ${resourceName} })
  },
  reset${resourceNameUppercase}State: () => {
    set({ ${resourceName}: null })
  },
}))`

module.exports = singleStoreTemplate
