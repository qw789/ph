// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/flexible.js';

import Vuex from 'vuex';
 
// load vuex i18n module
import vuexI18n from 'vuex-i18n';


// import vuxLocales from './locales/all.yml'

Vue.config.productionTip = false
import LazyLoads from 'vue-lazyload'
Vue.use(LazyLoads,{
  loading:require("@/assets/images/bg_quota.png")
});
// import '../src/components/toast/toast.css';
// import SinaifToast from '../src/components/toast/toast';
// Vue.use(SinaifToast, {
//   duration: 4000
// });

/* eslint-disable no-new */
Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

// set the start locale to use
// Vue.i18n.set('en');
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
