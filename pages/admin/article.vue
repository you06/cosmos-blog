<template>
  <div class="admin-article-container">
    <AdminArticle
      @post="post"
    />
  </div>
</template>

<script>
import AdminArticle from '@/components/admin/AdminArticle'

export default {
  layout: 'admin',
  components: {
    AdminArticle
  },
  methods: {
    post(post) {
      console.log(post)
    }
  }
}
</script>

<style lang="stylus" scoped>
.admin-article-container
  height 100%
  padding 15px
</style>
