const queriesTemplate = (resourceName, resourceNameUppercase) =>
  `import ${resourceNameUppercase}Service from '@/services/${resourceNameUppercase}Service/${resourceNameUppercase}Service'
import { useQuery } from '@tanstack/react-query'

const fetch${resourceNameUppercase} = async () => {
  // Remove any and add interface on T value from ${resourceNameUppercase}Service
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { data }: any = await ${resourceNameUppercase}Service.get()
  return data
}

export const useGet${resourceNameUppercase} = () => {
  return useQuery(['${resourceName}'], fetch${resourceNameUppercase})
}`

module.exports = queriesTemplate
