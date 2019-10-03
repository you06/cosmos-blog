<template>
  <div class="container">
    <Latest
      :cards="cards"
    />
  </div>
</template>

<script>
import Latest from '@/components/Latest'

export default {
  layout: 'base-nav',
  components: {
    Latest
  },
  async asyncData({ props, $axios }) {
    const { data: card } = await $axios.get(`/all/list`)
    if (card.status) {
      return {
        cards: card.data
      }
    } else {
      // redirect to 404 page
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
</style>
