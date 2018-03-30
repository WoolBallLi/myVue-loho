// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

import '../node_modules/swiper/dist/css/swiper.min.css'

import config from './modules/config'
import './modules/directives'
import store from './store'

new Vue({
  el: '#app',
  router,
  data:{config},
  store,
  components: { App },
  template: '<App/>'
})
