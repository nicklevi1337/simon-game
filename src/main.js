import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.devtools = true;

//console.log(Vue.config.devtools);


new Vue({
  render: h => h(App),
}).$mount('#app')
