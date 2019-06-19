import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: { // synchronous
    setAuthenticated (state, status) {
      state.authenticated = status
    }
  },
  actions: { // asynchronous
    setAuthenticated (context, status) {
      context.commit('setAuthenticated', status)
    }
  },
  getters: {
    authenticated (state) {
      return state.authenticated
    }
  }
})
