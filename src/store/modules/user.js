import {getToken, setToken, removeToken} from '@utils/auth'

const state = {
	token: getToken(),
	roles: [],
	name: ''
}

const getters = {
	roles: state => state.roles,
}

const mutations = {
	SET_TOKEN(state, token) {
		state.token = token
	},
	SET_NAME(state, name) {
		state.name = name
	},
	SET_ROLES: (state, roles) => {
		state.roles = roles
	}
}

const actions = {
	login(context, useInfo) {
		return new Promise((resolve, reject) => {
			let token = 'token'
			context.commit('SET_TOKEN', token)
			setToken(token)
			resolve()
		})
	},
	getInfo(context, state) {
		return new Promise((resolve, reject) => {
			context.commit('SET_ROLES', ['roles'])
			context.commit('SET_NAME', 'name')
			resolve({roles: ['roles']})
		})
	},
	resetToken(context, state) {
		return new Promise(resolve => {
			commit('SET_TOKEN', '')
			commit('SET_ROLES', [])
			removeToken()
			resolve()
		})
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
