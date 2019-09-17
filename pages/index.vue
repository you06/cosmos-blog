<template>
  <div class="container">
    <NameCard />
  </div>
</template>

<script>
import NameCard from '@/components/NameCard'

export default {
  components: {
    NameCard
  }
}
</script>

<style lang="stylus">
.container
  margin 0 auto
  min-height 100vh
  max-width 1400px
  padding 0 40px
  display flex
  justify-content flex-start
  align-items left
  text-align left

.title
  font-family 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px
</style>
