const Router = require('koa-router')
const Controller = require('./controller/')

function initRoute(cfg, pkg) {
  const ctl = Controller(cfg, pkg)

  const router = new Router({
    prefix: '/api'
  })
  
  router.get('/ping', (ctx, next) => {
    ctx.body = 'pong!'
  })

  // admin auth
  router.get('/auth/user', ctl.auth.user)
  router.post('/auth/login', ctl.auth.login)

  // all api
  router.get('/all/list', ctl.all.getList)
  // blog api
  router.get('/blog/:key', ctl.blog.getBlog)
  router.post('/blog/new', ctl.blog.createBlog)

  return router
}

module.exports = initRoute
