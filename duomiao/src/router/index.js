import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/page/mainPage'
import login from '@/page/login'
import shop from '@/page/shop'
import myAccount from '@/page/myAccount'
import bookDetail from '@/page/bookDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/main',
    name: 'main',
    component: MainPage
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/shop',
    name: 'shop',
    component: shop
  }, {
    path: '/myAccount',
    name: 'myAccount',
    component: myAccount
  },
  {
    path: '/bookDetail',
    name: 'bookDetail',
    component: bookDetail
  }
  ]
})
