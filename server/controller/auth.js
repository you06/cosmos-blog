const { json, genToken, hashPasswd } = require('../utils/')

const expire = 1 * 24 * 3600 * 1000
const tokenLength = 20

module.exports = function(cfg, pkg) {
  const auth = cfg.auth || {
    username: 'admin',
    password: 'password'
  }
  const passwordWithSHA = hashPasswd(auth.password)
  const sessions = {}

  // TODO: add token
  return {
    async login(ctx, next) {
      const { username, password } = ctx.request.body
      const valid = username === auth.username && password === passwordWithSHA

      if (!valid) {
        pkg.log.warn('Invalid username or password')
        ctx.body = json({}, false, 'Invalid username or password')
      } else {
        const token = genToken(tokenLength)
        const now = new Date()
        sessions[token] = {
          expire: new Date(now.getTime() + expire)
        }
        ctx.body = json({
          token
        })
      }
    },

    async user(ctx, next) {
      const { authorization } = ctx.request.header
      if (!authorization) {
        ctx.body = json(false, false, 'no token')
      } else if (authorization.split(' ').length < 2) {
        ctx.body = json(false, false, 'expired token')
      } else {
        const token = authorization.split(' ')[1]
        if (sessions[token] && sessions[token].expire > new Date()) {
          ctx.body = json({ user: 'admin' })
        } else {
          ctx.body = json(false, false, 'expired token')
        }
      }
    }
  }
}
