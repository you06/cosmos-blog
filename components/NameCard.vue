<template>
  <div class="namecard-container">
    <Avatar class="namecard-avatar" />
    <h1 class="line-name">
      you06
    </h1>
    <h1 class="line-matto">
      I DO WHAT I WANT.
    </h1>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  components: {
    Avatar
  }
}
</script>

<style lang="stylus" scoped>
.namecard-container
  padding 0 15px
  .namecard-avatar
    margin-bottom 20px
  .line-name
    font-size 20px
    color #222
  .line-matto
    margin-top 10px
    font-size 12px
    color #444
</style>
