<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in list " :key="index">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <button class="button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      list: Array
    }

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
    height: 1.9rem
    overflow: hidden
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      .item-title
        font-size: .32rem
        line-height: .54rem
      .item-desc
        line-height: .4rem
        color: #ccc
      .button
        border-radius: .06rem
        padding: 0  .1rem
        margin-top: .4rem
        background: #F9A016
</style>
