<template>
    <div>
      <div class="search">
        <input type="text" class="search-input" placeholder="输入城市景点名称">
      </div>
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      color: #666
      /*padding: 0 .1rem*/
      border-radius: 0.06rem
</style>
