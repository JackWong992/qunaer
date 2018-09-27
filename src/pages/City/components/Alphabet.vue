<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    width: .4rem
    position: absolute
    right: 0
    bottom: 0
    top: 1.58rem
    /*background: red*/
    display: flex
    flex-direction: column
    justify-content: center
    align-content: center
    .item
      text-align: center
      line-height: .44rem
      color: $bgColor
</style>
