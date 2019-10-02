<template>
  <div class="admin-contaienr">
    <AdminHeader class="admin-header" />
    <div class="admin-content">
      <AdminMenu />
      <div>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader'
import AdminMenu from '@/components/admin/AdminMenu'

export default {
  name: 'AdminLayout',
  middleware: 'auth',
  components: {
    AdminHeader,
    AdminMenu
  }
}
</script>

<style lang="stylus" scoped>
.admin-contaienr
  min-height 100vh
  display grid
  grid-template-rows 60px auto
  background #eee
  .admin-header
    background #444
  .admin-content
    display grid
    grid-template-columns 200px auto
</style>
