const fs = require('fs')
const path = require('path')
const currency = require('./currency.json')

const getString = (direction, obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key]['direction'] === direction) {
      const str = `  ${key.toLowerCase()}: '${obj[key]['symbol_native']}'`
      return [...acc, str]
    }
    return acc
  }, [])
}

const makeCss = (name, data) => {
  const str = getString(name, data)
  const fileName = path.join(__dirname, 'currency', `${name}.css`)
  const css = `$${name}_currency: (\n${str.join(',\n')}\n);`
  fs.writeFile(fileName, css, 'utf8', (err) => {
    if (err) throw err
  })
}

makeCss('left', currency)
makeCss('right', currency)

module.exports = currency
