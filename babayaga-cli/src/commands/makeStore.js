#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const singleStoreTemplate = require('../templates/singleStoreTemplate')
const storeTemplate = require('../templates/storeTemplate')
const typeTemplate = require('../templates/typeTemplate')
const queriesTemplate = require('../templates/queriesTemplate')
const capitalizeFirstLetter = require('../utils')

module.exports = (fileName, params) => {
  const storeDir = path.join('src/stores', fileName)

  const storeFile = path.join(storeDir, 'store.tsx')
  const indexFile = path.join(storeDir, 'index.ts')
  const typesFile = path.join(storeDir, 'types.ts')
  const queriesFile = path.join(storeDir, 'queries.ts')

  const resourceName = fileName.replace(/Store$/, '').toLowerCase()
  const resourceNameUppercase = capitalizeFirstLetter(resourceName)

  const templateSingleStore = singleStoreTemplate(
    resourceName,
    resourceNameUppercase,
  )

  if (params === '--all') {
    const templateStore = storeTemplate(resourceName, resourceNameUppercase)
    const templateType = typeTemplate(resourceName, resourceNameUppercase)
    const templateQueries = queriesTemplate(resourceName, resourceNameUppercase)

    fs.mkdirpSync(storeDir)

    fs.writeFileSync(storeFile, templateStore)
    fs.writeFileSync(typesFile, templateType)
    fs.writeFileSync(queriesFile, templateQueries)
    fs.writeFileSync(indexFile, `export * from './store'`)

    console.log(
      `Se ha creado el store ${fileName} en ${storeDir} con sus dependencias`,
    )
  } else {
    fs.mkdirpSync(storeDir)

    fs.writeFileSync(storeFile, templateSingleStore)
    fs.writeFileSync(indexFile, `export * from './store'`)

    console.log(`Se ha creado el store ${fileName} en ${storeDir}`)
  }

  console.log(
    '%c⚠️:',
    'color: red; font-weight: bold;',
    'Remplace las interfaces, no use <any>',
  )
}
