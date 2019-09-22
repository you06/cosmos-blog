const Router = require('koa-router')
const Controller = require('./controller/')

function initRoute(cfg) {
  const ctl = Controller(cfg)

  const router = new Router({
    prefix: '/api'
  })
  
  router.get('/ping', (ctx, next) => {
    ctx.body = 'pong!'
  })

  router.get('/blog/:key', ctl.blog.getBlog)

  return router
}

module.exports = initRoute
