import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')
const binBanner = '#!/usr/bin/env node'

// `veg-connect` bin
export default {
  input: './index.js',
  banner: binBanner,
  plugins: [ babel() ],
  output: {
    file: './bin/veg-connect',
    format: 'cjs'
  },
  external: [
    'chalk',
    'meow',
    'net'
  ]
}
