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

<style lang="stylus" scoped>
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
</style>
