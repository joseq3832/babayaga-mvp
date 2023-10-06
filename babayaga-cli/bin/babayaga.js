#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')

const args = process.argv.slice(2)
const command = args[0]
const fileName = args[1]

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

if (command === 'make:service' && fileName) {
  const serviceDir = path.join('src/services', fileName)
  const serviceFile = path.join(serviceDir, `${fileName}.tsx`)
  const indexFile = path.join(serviceDir, 'index.ts')
  const serviceName = fileName.replace(/Service$/, '').toLowerCase()
  const InterfaceName = capitalizeFirstLetter(serviceName)

  const serviceCode = `
  import { AxiosResponse } from 'axios';
  import HttpClient from '@/lib/HttpClient';

  const ${fileName} = {
    // Sustituir any por IResponse${InterfaceName}
    async request<T = any, R = AxiosResponse<T>>() {
      return await HttpClient.get<T, R>('${serviceName}');
    }
  };

  export default ${fileName};
  `

  // Crea la carpeta del servicio
  fs.mkdirpSync(serviceDir)

  // Crea el archivo de servicio con la estructura deseada
  fs.writeFileSync(serviceFile, serviceCode)

  // Crea el archivo index.ts
  fs.writeFileSync(indexFile, `export * from './${fileName}';`)

  console.log(`Se ha creado el servicio ${fileName} en ${serviceDir}`)
} else {
  console.error('Comando no reconocido o nombre de archivo faltante.')
}
