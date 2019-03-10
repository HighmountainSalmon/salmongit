// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../static/js/jquery.min.js'
import '../static/css/animate.css'
import '../static/css/style.css'
import '../static/css/responsive.css'
import '../static/css/owl.carousel.css'
import '../static/css/meanmenu.min.css'
import '../static/css/font-awesome.min.css'
import '../static/css/flexslider.css'
import '../static/css/chosen.min.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
