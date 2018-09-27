<template>
  <div>
    <div class="icons">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon" v-for=" item in page " :key="item.id">
            <img :src="item.imgUrl" class="icon-img">
            <p class="icon-title">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data() {
      return {
         swiperOption: {
            pagination: '.swiper-pagination'
          },
      }
    },
    computed: {
      pages ( ) {
        const pages = []
        this.list.forEach( (item, index)=>{
          const page = Math.floor( index/8 ) //判断是第几页 0 或者1
          if(!pages[page]){ //判断是
            pages[page] = []
          }
          pages[page].push(item)
        })
          return pages
      }
    }
  }
</script>

<style scoped lang="stylus">
  .icons >>> .swiper-container
    height: 0
    overflow: hidden
    padding-bottom: 50%
  .icon
    width: 25%
    padding-bottom: 25%
    float: left
    position: relative
    overflow: hidden
    .icon-img
      position: absolute
      left: 0
      top: -.2rem
      right: 0
      padding: .2rem
      box-sizing: border-box
      width: 100%
    .icon-title
      position: absolute
      left: 0
      bottom: .1rem
      text-align: center
      width: 100%
</style>
