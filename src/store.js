import Vue from 'vue'
import Vuex from 'vuex'
import curd from './store/modules/Crud'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    curd
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})