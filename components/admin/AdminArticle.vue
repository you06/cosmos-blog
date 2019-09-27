<template>
  <div class="article-container">
    <div class="article-tools">
      Tools todo
    </div>
    <div class="article-content-normal">
      <textarea class="article-content-write" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.article-container
  height 100%
  display grid
  grid-template-rows 60px auto
  .article-content-normal
    .article-content-write
      width 100%
      height 100%
</style>
