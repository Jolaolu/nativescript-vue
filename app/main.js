import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import axios from 'axios'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
