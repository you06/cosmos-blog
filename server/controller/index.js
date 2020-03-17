const Auth = require('./auth')
const All = require('./all')
const Blog = require('./blog')
const Record = require('./record')

module.exports = (cfg, pkg) => {
  return {
    auth: Auth(cfg, pkg),
    all: All(cfg, pkg),
    blog: Blog(cfg, pkg),
    record: Record(cfg, pkg)
  }
}
