const marked = require('marked')
const shajs = require('sha.js')
const { json } = require('../utils/')

module.exports = function(cfg) {
  const auth = cfg.auth || {
    username: 'admin',
    password: 'password'
  }
  const passwordWithSHA = shajs('sha256').update(auth.password).digest('hex')

  return {
    async login(ctx, next) {
      const { username, password } = ctx.request.body
      const valid = username === auth.username && password === passwordWithSHA

      if (!valid) {
        throw new Error('Invalid username or password')
      }

      ctx.body = json({
        token: 'admin'
      })
    },

    async user(ctx, next) {
      ctx.body = json({
        user: 'admin'
      })
    }
  }
}
