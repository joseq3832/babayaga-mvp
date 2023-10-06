#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const layoutTemplate = require('../templates/layoutTemplate')

module.exports = (fileName) => {
  const serviceDir = path.join('src/layouts', fileName)
  const serviceFile = path.join(serviceDir, `${fileName}.tsx`)

  const indexFile = path.join(serviceDir, 'index.ts')

  const template = layoutTemplate(fileName)

  fs.mkdirpSync(serviceDir)

  fs.writeFileSync(serviceFile, template)

  fs.writeFileSync(indexFile, `export * from './${fileName}'`)

  console.log(`Se ha creado el layout ${fileName} en ${serviceDir}`)
}
