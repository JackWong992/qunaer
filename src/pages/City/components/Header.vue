<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont city-icon">&#xe624;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: .86rem
    line-height: .86rem
    text-align: center
    background: $bgColor
    color: #fff
    overflow: hidden
    font-size: .32rem
    .city-icon
      width: .64rem
      position: absolute
      color: #fff
      top: 0
      left: 0
</style>
