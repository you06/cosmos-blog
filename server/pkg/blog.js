const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const marked = require('marked')
const highlight = require('highlight.js')
const fsWrap = require('../utils/fs')

marked.setOptions({
  highlight: (code) => {
    return highlight.highlightAuto(code).value
  }
})

module.exports = class {
  constructor(cfg) {
    this.cfg = cfg
    this.path = './uploads/blogs'
    this.blogs = {}
    this.blogList = []

    this.initCfg()
    this.initBlogs()
  }

  initCfg() {
    if (!this.blog) {
      return
    }
    if (this.blog.path) {
      this.path = this.blog.path
    }
  }

  async initBlogs() {
    const files = fs.readdirSync(this.path).filter((file) => /\.md$/.test(file))
    const promises = files.map((file) => {
      const filePath = path.join(this.path, file)
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve({
              file: filePath,
              data
            })
          }
        })
      })
    })

    const contents = await Promise.all(promises)
    for (const content of contents) {
      const { success, blog } = this.parseBlog(content.data)
      if (!this.validBlog(blog.route, blog.title, blog.tags, blog.content)) continue
      blog.file = content.file

      if (success) {
        if (!this.blogs[blog.route]) {
          this.blogs[blog.route] = blog
          this.blogList.push(blog)
        } else {
          const msg = `${blog.file} and ${this.blogs[blog.route].file} have same route, fix it and restart` 
          console.error(chalk.red(msg))
          process.exit(1)
        }
      }
    }
  }

  parseBlog(content) {
    let success = true
    let blog = {
      title: '',
      route: '',
      created: new Date(),
      updated: new Date(),
      tags: [],
      content: '',
      raw: ''
    }

    const lines = content.split('\n')
    let i = 0
    for (; i < lines.length; i++) {
      if (/^-+$/.test(lines[i].trim())) {
        break
      }
      if (i === lines.length - 1) {
        success = false
      }
    }

    if (!success) {
      return {
        success,
        blog
      }
    }

    const metas = lines.slice(0, i)
    const raw = lines.slice(i + 1, lines.length).join('\n')
    blog.raw = raw
    blog.content = marked(raw)
    
    for (const meta of metas) {
      const titleMeta = meta.match(/^title:\s(.*)$/)
      const routeMeta = meta.match(/^route:\s(.*)$/)
      const createdMeta = meta.match(/^createdAt:\s(.*)$/)
      const updatedMeta = meta.match(/^updatedAt:\s(.*)$/)
      const tagsMeta = meta.match(/^tags:\s(.*)$/)

      if (titleMeta) {
        blog.title = titleMeta[1]
      }
      if (routeMeta) {
        blog.route = routeMeta[1]
      }
      if (createdMeta) {
        blog.created = new Date(createdMeta[1])
      }
      if (updatedMeta) {
        blog.updated = new Date(updatedMeta[1])
      }
      if (tagsMeta) {
        blog.tags = tagsMeta[1].split(',')
      }
    }

    return {
      success,
      blog
    }
  }

  validBlog(route, title, tags, content) {
    if (!route) {
      return false
    }
    return true
  }

  getBlog(route) {
    if (this.blogs[route]) {
      const blog = this.blogs[route]
      return {
        title: blog.title,
        created: blog.created,
        updated: blog.updated,
        tags: blog.tags,
        content: blog.content
      }
    } else {
      return undefined
    }
  }

  getList() {
    // TODO: make a preview from content
    return this.blogList.map((blog) => {
      return {
        type: 'blog',
        route: blog.route,
        title: blog.title,
        created: blog.created,
        updated: blog.updated,
        tags: blog.tags,
        preview: ''
      }
    })
  }

  async createBlog(route, title, tags, content) {
    tags = tags.split(',')
    if (!this.validBlog(route, title, tags, content)) {
      return {
        success: false,
        msg: 'invalid blog'
      }
    }
    if (this.blogs[route]) {
      return {
        success: false,
        msg: `blog with route ${route} already exist`
      }
    }
    const now = new Date()

    const storage =
`title: ${title}
route: ${route}
createdAt: ${now.toISOString()}
updatedAt: ${now.toISOString()}
tags: ${tags.join(',')}
--------------------------
${content}`

    const filename = path.join(this.path, `${route}.md`)
    const exist = await fsWrap.exists(filename)
    if (exist) {
      return {
        success: false,
        msg: `${filename} already exist`
      }
    }
    const writeErr = await fsWrap.writeFile(filename, storage)
    if (writeErr) {
      return {
        success: false,
        msg: `error occured while writing file ${writeErr.toString()}`
      }
    }

    const blog = {
      title,
      route,
      created: now,
      updated: now,
      tags,
      content: marked(content),
      raw: content
    }
    
    this.blogList.push(blog)
    this.blogs[route] = blog

    return {
      success: true,
      msg: ''
    }
  }
}
