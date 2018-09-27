import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import 'swiper/dist/css/swiper.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import fastClick from 'fastclick'

Vue.use(Router)
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {
     path: '/',
     name: 'Home',
     component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
     }
  ]
})
