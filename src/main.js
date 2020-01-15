import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import '@/styles/element-variables.less'
import '@/styles/index.less'

import router from './router'
import store from './store'
import './permission'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Element, {
	size: 'medium'
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
