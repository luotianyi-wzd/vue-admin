const state = {
	goodsList: [
		{name: 'goods 1', price: 100},
		{name: 'goods 2', price: 200},
		{name: 'goods 3', price: 300},
		{name: 'goods 3', price: 400}
	]
}

const getters = {
	getSaledPrice: (state) => {
		const arr = state.goodsList.map((item) => {
			return {
				name: '测试' + item.name + '测试',
				price: item.price - 10
			}
		})
		return arr
	}
}

const mutations = {
	reducePrice: (state, payload) => {
		state.goodsList.forEach((item) => {
			item.price -= payload
		})
	}
}

const actions = {
	reducePriceAsync(context, payload) {
		context.commit('reducePrice', payload)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
