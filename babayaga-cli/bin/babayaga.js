#!/usr/bin/env node
const args = process.argv.slice(2)
const command = args[0]
const fileName = args[1]
const params = args[2]

if (command === 'make:service') {
  const makeService = require('../src/commands/makeService')
  makeService(fileName)
} else if (command === 'make:page') {
  const makePage = require('../src/commands/makePage')
  makePage(fileName)
} else if (command === 'make:layout') {
  const makeLayout = require('../src/commands/makeLayout')
  makeLayout(fileName)
} else if (command === 'make:component') {
  const makeComponent = require('../src/commands/makeComponent')
  makeComponent(fileName)
} else if (command === 'make:store') {
  const makeStore = require('../src/commands/makeStore')
  makeStore(fileName, params)
} else {
  console.error('Comando no reconocido o nombre de archivo faltante.')
}
