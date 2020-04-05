import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from 'echarts'
import store from './store'

// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入excel插件
import XLSX from 'xlsx'
Vue.prototype.XLSX = XLSX
var FileSaver = require('file-saver')

import axios from 'axios'
import log from "./plugins/utils"
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后 return config
  return config
})
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const gua = function (){
  log('gua gua')
}
