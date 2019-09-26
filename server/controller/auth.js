const marked = require('marked')
const shajs = require('sha.js')
const { json } = require('../utils/')

module.exports = function(cfg) {
  const passwordWithSHA = shajs('sha256').update('42').digest('hex')

  return {
    async login(ctx, next) {
      const { username, password } = ctx.request.body
      // const valid = username.length && password === passwordWithSHA
      const valid = username === '1'

      if (!valid) {
        throw new Error('Invalid username or password')
      }

      ctx.body = json({
        token: 'admin'
      })
    },

    async user(ctx, next) {
      console.log('user')
      ctx.body = json({
        user: 'admin'
      })
    }
  }
}
