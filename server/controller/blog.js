const { json } = require('../utils/')

module.exports = function(cfg, pkg) {
  const articles = {}

  return {
    async getBlog(ctx, next) {
      const blog = pkg.blog.getBlog(ctx.params.key)
      if (blog) {
        ctx.body = json(blog)
      } else {
        ctx.body = json({}, false, 'blog not found')
      }
    },
    async createBlog(ctx, next) {
      const { title, route, content } = ctx.request.body
      const { success, msg } = await pkg.blog.createBlog(route, title, '', content)

      ctx.body = json(success, success, msg)
    }
  }
}
