<template>
  <ul class="list">
    <li class="item"
        v-for="item in letters" :key="item"
      :ref="item"
      @click="handleClickLetter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
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
      data() {
        return {
          touchStatus: false  //状态判断,开始滑动状态为true，结束为false
        }
      },
      methods: {
          handleClickLetter(e){
            console.log('弟弟传来的值：'+ e.target.innerText )
            this.$emit( 'change', e.target.innerText )
          },
          handleTouchStart(){
            this.touchStatus = true
            //console.log('开始滚动了....')
          },
          handleTouchMove(e){
           // console.log('滚动了....')
            if(this.touchStatus){
              const startY = this.$refs['A'][0].offsetTop
              //A到当前城市的距离
              console.log('A字母到当前城市的距离:'+startY)
              const touchY = e.touches[0].clientY-79 //滚动的距离距离当前城市的距离
              //79为粉色边框顶部的长度，touchY是距离当前城市的距离
              //console.log('touchY:'+touchY)
              const index =  Math.floor( (touchY-startY)/20 )
              if( index >= 0 && index <= this.letters.length ){
                this.$emit('change', this.letters[index] )
              }
            }
          },
          handleTouchEnd(){
            this.touchStatus = false
            //console.log('滚动结束了....')
          }
      },
      computed: {
        letters(){
          const letters = []
          for( let i in this.cities ){
            letters.push(i)
          }
          return letters
        //制造一个数组，数组的内容为：['a','b','c',...'z']
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
