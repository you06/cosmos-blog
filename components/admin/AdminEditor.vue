<template>
  <div class="article-content-container">
    <div v-if="display==0" class="article-content-normal">
      <b-input
        v-if="!preview"
        v-model="inContent"
        type="textarea"
        class="article-content-write"
      />
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="preview"
        class="editor-preview"
        v-html="marked(inContent)"
      />
      <!-- eslint-enable vue/no-v-html -->
    </div>
    <div v-if="display==1" class="article-content-normal columns">
      <b-input
        v-model="inContent"
        type="textarea"
        class="article-content-write column"
      />
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="editor-preview column"
        v-html="marked(inContent)"
      />
      <!-- eslint-enable vue/no-v-html -->
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
  highlight: (code) => {
    return highlight.highlightAuto(code).value
  }
})

export default {
  name: 'AdminEditor',
  props: {
    content: {
      type: String,
      default: ''
    },
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
      inContent: ''
    }
  },
  watch: {
    inContent(newVal) {
      this.$emit('update:content', newVal)
    }
  },
  created() {
    this.inContent = this.content
  },
  methods: {
    marked
  }
}
</script>

<style lang="stylus" scoped>
.article-content-container
  .article-content-normal
    height 100%
    .editor-preview
      background #ffffff
    .article-content-write
      height 100%
      & > textarea
        height 100%
</style>
