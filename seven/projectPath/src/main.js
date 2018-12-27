// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import objectAssign from 'object-assign'
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import vuxLocales from './locales/all.yml'
import componentsLocales  from './locales/components.yml'
import axios from 'axios'
import qs from 'qs';
Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(Vuex)
const routes = [{
  path: '/',
  component: Home
}]
axios.interceptors.request.use(function (config) {
	// if (config.method=="post"){
  //       config.data = qs.stringify(config.data);
  //       // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  //   }
  return config;
}, function (error) {
  return Promise.reject(error);
});
const router = new VueRouter({
  routes
})


let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
Vue.use(vuexI18n.plugin, store)

const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
}

for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}
import {LocalePlugin,ConfigPlugin} from 'vux';
Vue.use(LocalePlugin);
const nowLocale = Vue.locale.get()
if (/zh/.test(nowLocale)) {
  Vue.i18n.set('zh-CN')
} else {
  Vue.i18n.set('en')
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
