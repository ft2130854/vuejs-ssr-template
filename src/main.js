import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'babel-polyfill'
// import VCharts from 'v-charts'
// import echarts from 'echarts'

import   './styles/resize.css'
import    './styles/element-ui/theme-default/index.css'
require('./styles/overwrite.less')
// mixin for handling title
Vue.mixin(titleMixin)
// Vue.use(VCharts)
Vue.use(ElementUI)
// Vue.use(resize)
// Vue.use(element_ui_theme)
// Vue.use(overwrite)
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL='http://115.29.140.43:8888'
// Vue.prototype.$echarts = echarts
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  // const store = createStore()
  // const router = createRouter()
  // const i18n = createi18n()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}