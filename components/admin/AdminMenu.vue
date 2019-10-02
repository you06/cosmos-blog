<template>
  <div class="admin-menu-container">
    <div
      v-for="(link, id) in links"
      :key="id"
      class="admin-menu-item"
    >
      <nuxt-link class="admin-menu-item-text" :to="link.to">
        {{ link.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
  data() {
    return {
      links: [
        {
          name: '新建博客',
          to: '/admin/article'
        },
        {
          name: '博客列表',
          to: '/admin/list'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.admin-menu-container
  background #666
  .admin-menu-item
    width 100%
    background #555
    transition background 0.2s ease-in-out
    &:hover
      background #666
    .admin-menu-item-text
      display block
      width 100%
      padding 15px
      font-size 16px
      color #fff

</style>
