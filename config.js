const fs = require('fs')

module.exports.getConfig = () => {
  if (fs.existsSync('./config.json')) {
    return JSON.parse(fs.readFileSync('./config.json'))
  } else {
    return JSON.parse(fs.readFileSync('./config.sample.json'))
  }
}
