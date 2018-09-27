<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="(item,index) of hot" :key="index">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key">
          <div class="title">{{key}}</div>
          <div class="item-list" v-for="innerItem in item" :key="innerItem.id">
            <div class="item">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
      name: "List",
      props: {
        hot:{
          type: Array
        },
        cities: {
          type: Object
        }
      },
      mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
        // console.log('--'+this.cities)
      }
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
    .list
      position: absolute
      top: 1.58rem
      left:0
      bottom: 0
      right: 0
      overflow: hidden
      .area
        background: #f0f5f6
        border-bottom: 1px solid #fff
        .title
          color: #000
          height: .4rem
          line-height: .4rem
          padding-left: .3rem
        .button-list
          padding: .1rem .6rem .1rem .1rem
          background: #fff
          overflow: hidden
          .button-wrapper
            float: left
            width: 33.3%
            text-align: center
            .button
              padding: .1rem 0 .1rem 0 ;
              border: 1px solid #ccc
              border-radius: .06rem
              margin: .1rem
        .item
          background: #fff
          border-bottom: 1px solid #ccc
          padding: .1rem 0 .1rem .2rem
          line-height: .54rem
          font-size: .28rem
</style>
