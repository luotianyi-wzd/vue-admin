import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/goods'
import permission from './modules/permission'
import user from './modules/user'
import app from './modules/app'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

/* const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
    modules,
    getters
})*/

const store = new Vuex.Store({
	modules: {
		goodsList: moduleA,
		permission,
		user,
		app,
		tagsView
	}
})

export default store
