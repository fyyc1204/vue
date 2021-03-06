// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router';
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/styles.less'


import IconSvg from './components/Icon-svg';// svg 组件


//Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component('icon-svg', IconSvg)

export const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
