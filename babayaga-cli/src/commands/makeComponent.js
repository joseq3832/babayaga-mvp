#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const componentTemplate = require('../templates/componentTemplate');

module.exports = (fileName) => {
  const serviceDir = path.join('src/components', fileName);
  const serviceFile = path.join(serviceDir, `${fileName}.tsx`);
  const indexFile = path.join(serviceDir, 'index.ts');
  const componentsIndexFile = path.join('src/components/index.ts');

  const template = componentTemplate(fileName);

  fs.mkdirpSync(serviceDir);

  fs.writeFileSync(serviceFile, template);

  fs.writeFileSync(indexFile, `export * from './${fileName}'`);

  const barrelContent = fs.readFileSync(componentsIndexFile, 'utf-8');
  if (barrelContent.includes(`export * from './${fileName}'`)) {
    console.log(`El componente ${fileName} ya se exporta en ${componentsIndexFile}`);
  } else {
    fs.appendFileSync(componentsIndexFile, `\nexport * from './${fileName}'`);
    console.log(`Se ha creado el componente ${fileName} en ${serviceDir}`);
  }
};
