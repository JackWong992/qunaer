import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import fastClick from 'fastclick'

Vue.use(Router)
fastClick.attach(document.body)


export default new Router({
  routes: [
    {
     path: '/',
     name: 'Home',
     component: Home
    }
  ]
})
