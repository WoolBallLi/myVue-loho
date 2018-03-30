import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import CustomerService from '../components/Customer service/CustomerService.vue'
import My from '../components/My/My.vue'
import Nearby from '../components/Nearby/Nearby.vue'
import TeamPurchase from '../components/Team purchase/TeamPurchase.vue'
import Detail from '../components/Detail/Detail.vue'
import ShopCar from '../components/ShopCar/ShopCar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'',component:Home},
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/kefu',
      name: 'CustomerService',
      component:CustomerService
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Nearby/:id',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/tuangou',
      name: 'TeamPurchase',
      component: TeamPurchase
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      props:true
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopCar,
    }
  ]
})
 