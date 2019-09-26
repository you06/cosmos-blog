const Auth = require('./auth')
const Blog = require('./blog')

module.exports = (cfg) => {
  return {
    auth: Auth(cfg),
    blog: Blog(cfg)
  }
}
