<template>
    <div>
      <div class="search">
        <input v-model='keyword'  type="text" class="search-input" placeholder="输入城市景点名称">
      </div>
      <div class="search-content" ref="search">
        <ul>
          <li v-for="(item,index) of list" :key="index" class="search-item"
            >{{item.name}}</li>
          <li  class="search-item" v-show="!this.list.length">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "CitySearch",
        props: {
          cities: {
            type: Object
          }
        },
        data() {
          return {
            keyword: '',
            list: [],
            timer: null
          }
        },
      watch:{
        keyword(){
          if( this.timer ){
            clearTimeout( this.timer )
          }
          if(!this.keyword){
            this.list=[]//当输入框内容为空的时候，列表内容不显示
            return  this.list
          }
          this.timer = setTimeout( ()=>{
            const result = []
            for(let i in this.cities){
              this.cities[i].forEach( (value)=>{
                if(value.spell.indexOf(this.keyword)>-1 ||
                  value.name.indexOf(this.keyword)>-1
                ){
                  result.push(value)
                }
              })
            }
            this.list = result
          },100 )
        }
      },
      mounted(){
        this.scroll = new Bscroll(this.$refs.search)
      }
    }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      color: #666
      /*padding: 0 .1rem*/
      border-radius: 0.06rem
  .search-content
    position: absolute
    background: #eee
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    overflow: hidden
    .search-item
      text-indent: .15rem
      background: #eee
      line-height: .42rem
      height: .42rem
      border-bottom: 1px solid #fff
</style>
