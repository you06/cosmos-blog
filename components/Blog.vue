<template>
  <div>
    <h1 class="blog-title">
      {{ title }}
    </h1>
    <span class="blog-date">
      {{ dateStr }}
    </span>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="blog-content" v-html="content" />
  </div>
</template>

<script>
import { formatDate } from '@/util/datetime'

export default {
  name: 'Blog',
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: [Number, String],
      default: () => new Date().getTime()
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    dateStr() {
      return formatDate(new Date(this.date))
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-title
  padding-top 20px
  font-size 35px
  font-weight bold
  color #333
.blog-date
  color #666
  transition 0.2s ease-in-out
.blog-content
  padding-top 30px
</style>
