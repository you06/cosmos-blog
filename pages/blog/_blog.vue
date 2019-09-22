<template>
  <div class="blogpage-container">
    <Nav />
    <Blog
      :title="title"
      :date="date"
      :content="content"
    />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Blog from '@/components/Blog'

export default {
  layout: 'blog-view',
  components: {
    Nav,
    Blog
  },
  async asyncData({ params, $axios }) {
    const { data: blog } = await $axios.get(`/blog/${params.blog}`)
    if (blog.status) {
      return blog.data
    } else {
      // redirect to 404 page
    }
  }
}
</script>

<style lang="stylus">
.container
  margin 0 auto
  min-height 100vh
  max-width 1400px
  padding 0 40px
</style>
