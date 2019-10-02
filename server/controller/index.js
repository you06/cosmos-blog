const Auth = require('./auth')
const Blog = require('./blog')

module.exports = (cfg, pkg) => {
  return {
    auth: Auth(cfg, pkg),
    blog: Blog(cfg, pkg)
  }
}
