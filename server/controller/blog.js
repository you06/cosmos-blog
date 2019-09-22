const marked = require('marked')
const { json } = require('../utils/')

module.exports = function(cfg) {


  return {
    async getBlog(ctx, next) {
      const mdText = `# blog ${ctx.params.key}

hello world`

      ctx.body = json({
        title: 'Title of blog',
        date: new Date().getTime(),
        content: marked(mdText)
      })
    }
  }
}
