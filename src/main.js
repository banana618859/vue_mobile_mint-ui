/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2021-01-20 20:21:41
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-01-23 20:04:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'
import './assets/font/iconfont.css'


// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
