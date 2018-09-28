import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch(e){

}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
   changeCity(ctx,city){
     //接收两个参数一个是上下文,一个是从dispatch触发的值,action调用mutations值必须是通过commit方法
    ctx.commit('changeCitys',city)
   }
  },
  mutations: {
    changeCitys(state, city){
     //第一个值为state的值，第二个值为上面action外部传过来的值
     state.city = city
     try{
       localStorage.city = city
     }catch(e){}
    }
  }
})
/*
大致过程：state里面的值为公用的数据可以通过this.$store.xx访问得到

action通过dispatch方法来接收state的值，接收两个参数,一个是ctx，一个是传过来的值，ctx可以出发commit方法，向外触发方法changeCitys传递给mutations用来传递值，

mutations接收两个参数，一个state的值，一个是mutations的值，改变他们
*/
