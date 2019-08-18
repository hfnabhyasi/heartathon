//bootstrap internally imports jquery and popper
import "../node_modules/bootstrap/dist/js/bootstrap"
import Vue from 'vue'
import App from './App.vue'
import './main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#lms-wordpressPlugin')
