<template>
  <div class="layout-container">
    <div class="layout-container-left">
      <NameCard />
    </div>
    <div class="layout-container-right">
      <Nav />
      <nuxt />
    </div>
  </div>
</template>

<script>
import NameCard from '@/components/NameCard'
import Nav from '@/components/Nav'

export default {
  layout: 'base-nav',
  components: {
    NameCard,
    Nav
  }
}
</script>

<style lang="stylus" scoped>
.layout-container
  margin 0 auto
  min-height 100vh
  max-width 1400px
  padding 0 40px
  display flex
  justify-content flex-start
  align-items left
  text-align left
  .layout-container-left
    padding 15px
  .layout-container-right
    width 100%
    padding 15px
</style>
