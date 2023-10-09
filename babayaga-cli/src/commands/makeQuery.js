#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const queriesTemplate = require('../templates/queriesTemplate')
const capitalizeFirstLetter = require('../utils')

module.exports = (fileName) => {
  const hookDir = path.join('src/hooks', fileName)
  const hookFile = path.join(hookDir, `${fileName}.ts`)
  const indexFile = path.join(hookDir, 'index.ts')
  const hooksIndexFile = path.join('src/hooks/index.ts')

  const resourceName = fileName.replace(/useFetch/, '').toLowerCase()
  const resourceNameUppercase = capitalizeFirstLetter(resourceName)

  const template = queriesTemplate(resourceName, resourceNameUppercase)

  fs.mkdirpSync(hookDir)

  fs.writeFileSync(hookFile, template)

  fs.writeFileSync(indexFile, `export * from './${fileName}'`)

  const barrelContent = fs.readFileSync(hooksIndexFile, 'utf-8')
  if (barrelContent.includes(`export * from './${fileName}'`)) {
    console.log(`El hook ${fileName} ya se exporta en ${hooksIndexFile}`)
  } else {
    fs.appendFileSync(hooksIndexFile, `\nexport * from './${fileName}'`)
    console.log(`Se ha creado el hook ${fileName} en ${hookDir}`)
  }
}
