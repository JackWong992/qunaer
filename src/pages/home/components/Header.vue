<template>
   <div class="header">
     <div class="header-left">
       <div class="iconfont back-icon">&#xe624;</div>
     </div>
     <div class="header-input">
       <div class="iconfont search-icon">&#xe632;</div>
       输入城市/景点/游玩主题</div>
      <router-link to="/city">
        <div class="header-right">{{this.$store.state.city}}
          <!-- state里面的值直接通过$store.state.xxx直接取 -->
          <div class="iconfont city-icon">&#xe807;</div>
        </div>
      </router-link>

   </div>
</template>

<script>
    export default {
        name: "HomeHeader",
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    line-height: .86rem
    background: $bgColor
    display: flex
    .header-input
      flex: 1
      background: #fff
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      border-radius: .06rem
      padding-left: .4rem
      .search-icon
        display: inline-block
    .header-left
      float: left
      width: .64rem
      color: #fff
      .back-icon
        margin-left: .2rem
        font-size: .4rem
    .header-right
      float: right
      width: 1.48rem
      text-align: center
      color: #fff
      padding: 0 -.1rem
      // border: 1px solid red
      .city-icon
        display: inline-block
        font-size: .24rem
        margin-left: -.04rem
</style>
