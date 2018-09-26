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
    data() {
      return {
         swiperOption: {
            pagination: '.swiper-pagination'
          },
        iconList: [{
          id: '001',
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc: '景点门票'
          },{
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },{
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          },{
            id: '010',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          }]
      }
    },
    computed: {
      pages ( ) {
        const pages = []
        this.iconList.forEach( (item, index)=>{
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
