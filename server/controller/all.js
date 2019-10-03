const { json } = require('../utils/')

module.exports = function(cfg, pkg) {
  return {
    async getList(ctx, next) {
      const blogs = pkg.blog.getList().sort((a, b) => {
        return b.created.getTime() - a.created.getTime()
      })
      ctx.body = json(blogs)
    }
  }
}
