<template>
  <div class="nav">
    <ul class="nav-list">
      <li>
        <nuxt-link to="/">
          <img src="@/assets/image/logo.png">
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Diary
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          Resume
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          About
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.nav
  padding-top 15px
  .nav-list
    padding-left 0
    list-style-type none
    display flex
    justify-content flex-start
    align-items center
    align-items left
    text-align left
    li
      padding-left 30px
      &:first-child
        padding-left 0
      a
        font-weight bold
</style>
