import Vue from 'vue'
import App from './App.vue'
import router from './router/reception'
import store from './store'
import bootstrap from '@/plugins'
import '@/styles/_reception.scss'

async function startUp () {
  // 初始化vue相关功能
  await bootstrap()
  Vue.config.productionTip = false
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
startUp()
