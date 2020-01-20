const state = {
	logs: [
		1, 3, 3, 3, 33
	]
}

const getters = {
	logsList(state) {
		return state.logs
	}
}

const mutations = {
	ADD_ERROR_LOG: (state, log) => {
		state.logs.push(log)
	},
	CLEAR_ERROR_LOG: (state) => {
		state.logs.splice(0)
	}
}

const actions = {
	addErrorLog({commit}, log) {
		commit('ADD_ERROR_LOG', log)
	},
	clearErrorLog({commit}, log) {
		commit('CLEAR_ERROR_LOG', log)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
