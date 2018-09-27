<template>
  <div>
    <div class="recommend-title">周末推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in weekendList " :key="index">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data() {
      return {
        weekendList: [{
          imgUrl:"http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "上海迪士尼乐园",
          desc: "这里最近很火哦，好多人都在点评它呢！"
        },{
          imgUrl:"http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg",
          title: "上海迪士尼乐园",
          desc: "这里最近很火哦，好多人都在点评它呢！"
        },{
          imgUrl:"http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg",
          title: "上海迪士尼乐园",
          desc: "这里最近很火哦，好多人都在点评它呢！"
        }]
      }
    },

  }
</script>

<style scoped lang="stylus">
  .recommend-title
    background: #ccc
    font-size: .28rem
    line-height: .42rem
    height: .42rem
    text-indent: .3rem
  .item
    height: 3.9rem
    overflow: hidden
    display: flex
    flex-direction: column
    .item-img
      height: 2.78rem
      padding: .1rem
    .item-info
      flex: 1
      padding-left: .1rem
      border-bottom: 1px solid #ccc
      .item-title
        font-size: .28rem
        line-height: .42rem
      .item-desc
        line-height: .4rem
        color: #ccc
</style>
