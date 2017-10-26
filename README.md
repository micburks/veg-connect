# veg-connect
Connect to and manipulate [veggie](https://www.npmjs.com/package/veggie) server via command-line REPL

## Installation

```bash
npm i -g veg-connect
```

## Use

veg-connect will connect a REPL (run-eval-print-loop) to a running veggie server via unix sockets.

```bash
veg-connect
```

### Options

- `-h` `--help`     Output help and exit
- `-v` `--version`  Output version and exit
- `-s` `--silent`   Disable logging


## Functionality

Once you are connected to the veggie server, you will be afforded functions that can manipulate the server's response. Please see the [veggie documentation](https://github.com/micburks/veggie) for what is available with your version of veggie.
