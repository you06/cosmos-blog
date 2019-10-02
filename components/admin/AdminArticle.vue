<template>
  <div class="article-container">
    <div class="columns">
      <b-input
        v-model="title"
        placeholder="标题"
        class="artitle-title column"
      />
      <b-input
        v-model="route"
        placeholder="路由"
        class="artitle-route column"
      />
    </div>
    <admin-tools
      class="article-tools"
      :preview.sync="preview"
      :display.sync="display"
      @post="post"
    />
    <admin-editor
      class="article-content"
      :content.sync="content"
      :preview="preview"
      :display="display"
    />
  </div>
</template>

<script>
import AdminEditor from '@/components/admin/AdminEditor'
import AdminTools from '@/components/admin/AdminTools'

export default {
  components: {
    AdminEditor,
    AdminTools
  },
  data() {
    return {
      preview: false,
      display: 1,
      title: '',
      route: '',
      content: ''
    }
  },
  methods: {
    post() {
      const post = {
        title: this.title,
        route: this.route,
        content: this.content
      }
      this.$emit('post', post)
    }
  }
}
</script>

<style lang="stylus" scoped>
.article-container
  height 100%
  display grid
  grid-template-rows 60px 60px auto
</style>
