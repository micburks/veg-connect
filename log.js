import chalk from 'chalk'

const { blue, green, red } = chalk
const client = blue('veg-connect:')
let logEnabled = false

export function setLog (enabled) {
  logEnabled = enabled
}

export function clientLog (message) {
  log(green(`${client} ${message}`))
}

export function clientError (message) {
  log(red(`${client} ${message}`))
}

function log (output) {
  if (logEnabled) {
    console.log(output)
  }
}
