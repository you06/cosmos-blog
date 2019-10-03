<template>
  <div class="latest">
    <PostCard
      v-for="(card, key) in cards"
      :key="key"
      :route="card.route"
      :type="card.type"
      :title="card.title"
      :date="new Date(card.created)"
      :preview="card.preview"
    />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard
  },
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.latest
  padding-top 50px
</style>
