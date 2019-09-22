const Blog = require('./blog')

module.exports = (cfg) => {
  return {
    blog: Blog(cfg)
  }
}
