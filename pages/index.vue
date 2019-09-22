<template>
  <div class="container">
    <Latest />
  </div>
</template>

<script>
import Latest from '@/components/Latest'

export default {
  layout: 'base-nav',
  components: {
    Latest
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
</style>
