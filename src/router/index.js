/**
 * 路由器模块
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Personal from '@/pages/Personal/Personal'
import Login from '@/pages/Login/Login'
import Shop from '@/pages/Shop/Shop'
import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '@/pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Personal',
      component:Personal,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Login',
      component:Login
    },
    {
      path:'/Shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }
  ]
})
