const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    ADD_VISITED_VIEW: (state, view) => {
        if (state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(
            Object.assign({}, view, {
                title: view.meta.title || 'no-name'
            })
        )
    },
    DEL_VISITED_VIEW: (state, view) => {
        for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },
    DEL_ALL_VISITED_VIEW: state => {
        const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
        state.visitedViews = affixTags
    },
    DEL_OTHERS_VISITED_VIEW: (state, view) => {
        const restTags = state.visitedViews.filter(tag => {
            return tag.meta.affix || tag.path === view.path
        })
        state.visitedViews = restTags
    }
}

const actions = {
    addVisitedView({commit}, view) {
        commit('ADD_VISITED_VIEW', view)
    },
    delVisitedView({commit, state}, view) {
        return new Promise(resolve => {
            commit('DEL_VISITED_VIEW', view)
            resolve({visitedViews: [...state.visitedViews]})
        })
    },
    delAllVisitedView({commit, state}) {
        return new Promise(resolve => {
            commit('DEL_ALL_VISITED_VIEW')
            resolve({visitedViews: [...state.visitedViews]})
        })
    },
    delOthersVisitedView({commit, state}, view) {
        return new Promise(resolve => {
            commit('DEL_OTHERS_VISITED_VIEW', view)
            resolve({visitedViews: [...state.visitedViews]})
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
