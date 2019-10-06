<template>
  <div class="footer-container">
    <div class="footer-block">
      <a href="https://github.com/you06/cosmos-blog" target="_blank">
        <b-icon
          icon="github-circle"
          size="is-medium"
        />
      </a>
      <a :href="creativeCommons[cc].url" target="_blank">
        <img
          :src="creativeCommons[cc].icon"
          class="footer-cc-icon"
        >
      </a>
    </div>
  </div>
</template>

<script>
import creativeCommons from '@/util/creative-commons'

export default {
  name: 'Footer',
  data() {
    return {
      cc: 'by-nc',
      creativeCommons
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer-container
  width 100%
  padding 15px 10px
  .footer-block
    text-align center
    > *
      padding 0 5px
    .footer-cc-icon
      height 30px
</style>
