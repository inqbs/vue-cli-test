const state = {
	taskList: []
}

const getters = {
	taskList: state => state.taskList
}

const actions = {
	add({ commit }, msg) {
		console.log(msg)
		commit('add', msg)
	},
	edit({ commit }, param) {
		commit('edit', param)
	},
	remove({ commit }, idx) {
		commit('remove', idx)
	}
}

const mutations = {
	add(state, msg) {
		state.taskList.push(msg)
	},
	edit(state, param) {
		console.log(param)
		state.taskList[param.idx] = param.msg
	},
	remove(state, idx) {
		state.taskList.splice(idx, 1)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
