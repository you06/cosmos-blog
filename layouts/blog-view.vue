<template>
  <div class="layout-container">
    <div class="layout-body">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  layout: 'base-nav',
  components: {
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
    padding 20px 40px
</style>
