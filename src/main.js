import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import './styles/element-variables.less'

Vue.config.productionTip = false
Vue.use(Element, {
	size: 'medium',
})


new Vue({
  render: h => h(App),
}).$mount('#app')
