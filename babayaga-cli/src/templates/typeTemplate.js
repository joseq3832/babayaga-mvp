const typeTemplate = (resourceName, resourceNameUppercase) =>
  `export interface ${resourceName}State {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ${resourceName}: any | null
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  set${resourceNameUppercase}: (${resourceName}: any) => void
  reset${resourceNameUppercase}State: () => void
}`

module.exports = typeTemplate
