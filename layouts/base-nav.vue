<template>
  <div class="layout-container">
    <div class="layout-body">
      <div class="layout-body-left">
        <NameCard />
      </div>
      <div class="layout-body-right">
        <Nav />
        <nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NameCard from '@/components/NameCard'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  layout: 'base-nav',
  components: {
    NameCard,
    Nav,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.layout-container
  width 100%
  .layout-body
    margin 0 auto
    min-height 100vh
    max-width 1400px
    padding 0 40px
    display flex
    justify-content flex-start
    align-items left
    text-align left
    .layout-body-left
      padding 15px
    .layout-body-right
      width 100%
      padding 15px 40px
    @media screen and (max-width: 800px)
      .layout-body-left
        display none
      .layout-body-right
        padding 15px 0
</style>
