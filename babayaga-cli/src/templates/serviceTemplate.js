const serviceTemplate = (serviceName, interfaceName, pathName) =>
  `import HttpClient from '@/lib/HttpClient'
  import { AxiosResponse } from 'axios'

  const ${serviceName} = {
    // Sustituir any por ${interfaceName}
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    async get<T = any, R = AxiosResponse<T>>() {
      return await HttpClient.get<T, R>('${pathName}')
    },
  }

  export default ${serviceName}`

module.exports = serviceTemplate
