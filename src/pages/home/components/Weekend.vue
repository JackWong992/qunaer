<template>
  <div>
    <div class="recommend-title">周末推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in list " :key="index">
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
