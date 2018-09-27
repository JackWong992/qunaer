<template>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if=" showSwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in list" :key="index">
          <img :src="item.imgUrl" class="swiper-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
      name: "HomeSwiper",
      props: {
        list: Array
      },
      data() {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: 1500
          },
        }
      },
      computed:{
        showSwiper(){
          return this.list.length
        }
      }
    }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: red
  .wrapper
    overflow: hidden
    width: 100%;
    height:0
    padding-bottom: 26.9%
    .swiper-img
      width: 100%
</style>
