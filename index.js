import meow from 'meow'
import net from 'net'
import { clientError, clientLog, setLog } from './log'

// File path for repl unix socket
const socketPath = '/tmp/veggie.sock'

const cli = meow(`
      Usage
        $ veg-connect

      Options
        -v, --version   Output veg-connect version and exit
        -s, --silent    Disable veg-connect logging

      Examples
        $ veg-connect
        veg-connect: connected to repl at /tmp/veggie.sock
  `, {
    default: {
      silent: false
    },
    alias: {
      v: 'version',
      s: 'silent'
    }
  })

// Set logging level
setLog(!cli.flags.silent)

const socket = net.createConnection(socketPath)

socket.setEncoding('utf8')
process.stdin.pipe(socket)
socket.pipe(process.stdout)

socket.on('connect', () => {
  clientLog(`connected to repl at ${socketPath}`)
  process.stdin.resume()
  process.stdin.setRawMode(true)
})

socket.on('message', data => {
  clientLog(`data received - ${data}\n`)
})

socket.on('error', e => {
  clientError(`repl error ${e}`)
})

socket.on('close', () => {
  clientLog(`repl closing (${socketPath})`)
  process.stdin.setRawMode(false)
  process.stdin.pause()
  process.exit(0)
})

process.stdin.on('end', () => {
  socket.destroy()
})

process.stdin.on('data', (b) => {
  if (b.length === 1 && b[0] === 4) {
    process.stdin.emit('end')
  }
})
