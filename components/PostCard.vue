<template>
  <nuxt-link to="/blog/hello-world" class="postcard">
    <h2 class="postcard-title">
      {{ title }}
    </h2>
    <p class="postcard-date">
      {{ dateStr }}
    </p>
    <p>
      {{ content }}
    </p>
  </nuxt-link>
</template>

<script>
import { formatDate } from '@/util/datetime'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: () => new Date()
    }
  },
  computed: {
    dateStr() {
      return formatDate(this.date)
    }
  }
}
</script>

<style lang="stylus" scoped>
.postcard
  margin-top 15px
  padding 15px
  border-radius 5px
  border 1px solid #eee
  display block
  cursor pointer
  transition 0.2s ease-in-out
  &:first-child
    margin-top 0
  .postcard-title
    font-size 1.2em
  .postcard-date
    font-size 0.8em
    color #666
    transition 0.2s ease-in-out
  &:hover
    border 1px solid #ccc
    .postcard-date
      color #454545

</style>
