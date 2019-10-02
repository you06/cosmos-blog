<template>
  <div class="tools-container columns">
    <div class="tools-left column" />
    <div class="tools-right column">
      <div class="tools-right-container">
        <b-switch v-model="inPreview" />
        <b-select v-model="inDisplay">
          <option
            v-for="(opt, key) in opts"
            :key="key"
            :value="opt.val"
          >
            {{ opt.display }}
          </option>
        </b-select>
        <b-button
          type="is-primary"
          @click="post"
        >
          Blog!
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminTools',
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    display: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      inPreview: false,
      inDisplay: 0,
      opts: [
        {
          display: 'Default',
          val: 0
        },
        {
          display: 'Double Column',
          val: 1
        }
      ]
    }
  },
  watch: {
    inPreview(newVal) {
      this.$emit('update:preview', newVal)
    },
    inDisplay(newVal) {
      this.$emit('update:display', newVal)
    }
  },
  created() {
    this.inPreview = this.preview
    this.inDisplay = this.display
  },
  methods: {
    post() {
      this.$emit('post')
    }
  }
}
</script>

<style lang="stylus" scoped>
.tools-container
  font-weight bold
  .tools-right
    .tools-right-container
      width 100%
      height 100%
      text-align right
      & > *
        display inline-block
        vertical-align top
</style>
