#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const pageTemplate = require('../templates/pageTemplate')

module.exports = (fileName) => {
  const serviceDir = path.join('src/pages', fileName)
  const serviceFile = path.join(serviceDir, `${fileName}.tsx`)

  const indexFile = path.join(serviceDir, 'index.ts')

  const template = pageTemplate(fileName)

  fs.mkdirpSync(serviceDir)

  fs.writeFileSync(serviceFile, template)

  fs.writeFileSync(indexFile, `export * from './${fileName}'`)

  console.log(`Se ha creado pa página ${fileName} en ${serviceDir}`)
}
