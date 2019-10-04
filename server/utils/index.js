const crypto = require('crypto')
const shajs = require('sha.js')

module.exports.json = (data, status = true, message = '') => {
  if (status) {
    return {
      status,
      data,
      message: ''
    }
  } else {
    return {
      status,
      data,
      message
    }
  }
}

module.exports.genToken = (len) => {
  let t = ''
  const randBytes = crypto.randomBytes(len)
  for (let i = 0; i < randBytes.length; i++) {
    const originRand = randBytes[i] % (26 * 2 + 10)
    if (originRand < 10) {
      t += String.fromCharCode(originRand + 48)
    } else if (originRand < 36) {
      t += String.fromCharCode(originRand + 55)
    } else {
      t += String.fromCharCode(originRand + 61)
    }
  }
  return t
}

module.exports.hashPasswd = (password) => {
  for (let i = 0; i < 16384; i++) {
    password = shajs('sha256').update(password).digest('hex')
  }
  return password
}
