#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const singleStoreTemplate = require('../templates/singleStoreTemplate')
const storeTemplate = require('../templates/storeTemplate')
const typeTemplate = require('../templates/typeTemplate')
const persistStoreTemplate = require('../templates/persistStoreTemplate')
const capitalizeFirstLetter = require('../utils')

module.exports = (fileName, all, persist) => {
  const storeDir = path.join('src/stores', fileName)

  const storeFile = path.join(storeDir, 'store.tsx')
  const indexFile = path.join(storeDir, 'index.ts')
  const typesFile = path.join(storeDir, 'types.ts')

  const resourceName = fileName.replace(/Store$/, '').toLowerCase()
  const resourceNameUppercase = capitalizeFirstLetter(resourceName)

  const templateSingleStore = singleStoreTemplate(
    resourceName,
    resourceNameUppercase,
  )

  if (all === '--all') {
    const templateType = typeTemplate(resourceName, resourceNameUppercase)

    fs.mkdirpSync(storeDir)

    if (persist === '--persist') {
      const templateStorePersist = persistStoreTemplate(
        resourceName,
        resourceNameUppercase,
      )
      fs.writeFileSync(storeFile, templateStorePersist)
    } else {
      const templateStore = storeTemplate(resourceName, resourceNameUppercase)
      fs.writeFileSync(storeFile, templateStore)
    }

    fs.writeFileSync(typesFile, templateType)
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
