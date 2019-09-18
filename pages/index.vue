<template>
  <div class="container">
    <div class="container-left">
      <NameCard />
    </div>
    <div class="container-right">
      <Nav />
      <Latest />
    </div>
  </div>
</template>

<script>
import NameCard from '@/components/NameCard'
import Nav from '@/components/Nav'
import Latest from '@/components/Latest'

export default {
  components: {
    NameCard,
    Nav,
    Latest
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
  .container-left
    padding 15px
  .container-right
    width 100%
    padding 15px

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

a
  text-decoration none
  color #333
  &:visited
    color #333
</style>
