<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <span>
      {{ dateStr }}
    </span>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="content" />
  </div>
</template>

<script>
import { formatDate } from '@/util/datetime'

export default {
  name: 'Blog',
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: Number,
      default: () => new Date().getTime()
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    dateStr() {
      return formatDate(new Date(this.date))
    }
  }
}
</script>
