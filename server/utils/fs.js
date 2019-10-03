const fs = require('fs')

module.exports.exists = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.exists(filepath, (exist) => {
      resolve(exist)
    })
  })
}

module.exports.writeFile = (filepath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (err) => {
      if (err) {
        resolve(err)
      }
      resolve(undefined)
    })
  })
}
