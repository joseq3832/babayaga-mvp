#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const serviceTemplate = require('../templates/serviceTemplate')
const capitalizeFirstLetter = require('../utils')

module.exports = (fileName) => {
  const serviceDir = path.join('src/services', fileName)
  const serviceFile = path.join(serviceDir, `${fileName}.tsx`)

  const indexFile = path.join(serviceDir, 'index.ts')
  const pathName = fileName.replace(/Service$/, '').toLowerCase()
  const interfaceName = `IResponse${capitalizeFirstLetter(pathName)}`

  const template = serviceTemplate(fileName, interfaceName, pathName)

  fs.mkdirpSync(serviceDir)

  fs.writeFileSync(serviceFile, template)

  fs.writeFileSync(indexFile, `export * from './${fileName}'`)

  console.log(`Se ha creado el servicio ${fileName} en ${serviceDir}`)
}
