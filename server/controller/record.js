const { json } = require('../utils/')

module.exports = function(cfg, pkg) {
  const articles = {}

  return {
    async getRecord(ctx, next) {
      ctx.body = json(cfg.record)
    }
  }
}
