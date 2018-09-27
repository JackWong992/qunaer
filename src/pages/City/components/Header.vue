<template>
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
       城市选择
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    position: relative
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #ffffff
    background: $bgColor
    .back-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      color: #fff
</style>
