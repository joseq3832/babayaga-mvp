#!/usr/bin/env node
const args = process.argv.slice(2)
const command = args[0]
const fileName = args[1]

if (command === 'make:service') {
  const makeService = require('../src/commands/makeService')
  makeService(fileName)
} else if (command === 'make:page') {
  const makePage = require('../src/commands/makePage')
  makePage(fileName)
} else {
  console.error('Comando no reconocido o nombre de archivo faltante.')
}
