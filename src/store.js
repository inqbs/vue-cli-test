import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import curd from './store/modules/Crud'

//import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    curd
  },
  plugins: [
    createPersistedState({
      paths: ['curd','taskList'],
      /* storage:{
          getItem: key => Cookies.get(key),
          setItem: (key, value) => Cookies.set(key, value, {expires:3, secure: false, sameSite: 'Lax'}),
          removeItem: key => Cookies.remove(key),
      } */
      key: 'vue-cli-test',
      storage: window.sessionStorage
    })
  ],
})