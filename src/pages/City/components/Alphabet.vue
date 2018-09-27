<template>
  <ul class="list">
    <li class="item"
        v-for="(item,key) in cities" :key="key"
      @click="handleClickLetter">{{key}}</li>
  </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
          cities: {
            type: Object
          }
        },
      methods: {
          handleClickLetter(e){
            console.log('弟弟传来的值：'+ e.target.innerText )
            this.$emit( 'change', e.target.innerText )
          }
      }
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
