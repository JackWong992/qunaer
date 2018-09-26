<template>
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperList" :key="index">
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
      data() {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: 3500
          },
          swiperList: [{
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/87/534cf2e0a71fff02.jpg_750x200_5c778719.jpg'
          },{
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/dc/61caf680f5ddbc02.jpg_750x200_c619ed45.jpg'
          },{
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/83/a77595fb02eed602.jpg_750x200_1627b072.jpg'
          },{
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/83/a77595fb02eed602.jpg_750x200_1627b072.jpg'
          },{
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg'
          }]
        }
      },
    }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%;
    height:0
    padding-bottom: 26.9%
    .swiper-img
      width: 100%
</style>
