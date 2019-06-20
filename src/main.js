// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import {store} from './vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {API} from './api/http.api'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// this bind should be done before Vue is created
Vue.prototype.$api = API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: {App},
  template: '<App/>'
})
