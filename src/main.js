import Vue from 'vue'
import App from './App.vue'
import './main.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#lms-wordpressPlugin')
