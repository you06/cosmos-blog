const Blog = require('./blog')
const Log = require('./log')

module.exports = function(cfg) {
    return {
        blog: new Blog(cfg),
        log: new Log(cfg)
    }
}
