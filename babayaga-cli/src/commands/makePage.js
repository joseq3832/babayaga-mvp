#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const pageTemplate = require('../templates/pageTemplate')

module.exports = (fileName) => {
  const serviceDir = path.join('src/pages', fileName)
  const serviceFile = path.join(serviceDir, `${fileName}.tsx`)
  const indexFile = path.join(serviceDir, 'index.ts')
  const componentsIndexFile = path.join('src/pages/index.ts');

  const template = pageTemplate(fileName)

  fs.mkdirpSync(serviceDir)

  fs.writeFileSync(serviceFile, template)

  fs.writeFileSync(indexFile, `export * from './${fileName}'`)

  const barrelContent = fs.readFileSync(componentsIndexFile, 'utf-8');
  if (barrelContent.includes(`export * from './${fileName}'`)) {
    console.log(`La página ${fileName} ya se exporta en ${componentsIndexFile}`);
  } else {
    fs.appendFileSync(componentsIndexFile, `\nexport * from './${fileName}'`);
    console.log(`Se ha creado la página ${fileName} en ${serviceDir}`);
  }
}
