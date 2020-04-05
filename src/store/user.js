import Vue from 'vue'
import Vuex from 'vuex'

// vuex 操作数据 demo
export default {
    namespaced: true,
    state: {
        username: 'yivo',
        password: 'pass',
    },
    getters: {
        lengthOfUsername: function (state) {
          let s = state.username.length
          return s
        },
        testUsername: function (state, post) {
          let s = 'test' + state.username + post
          return s
        },
    },
    mutations: {
        changeUsername: function (state) {
          state.username = state.username + 'test mutation change'
        }
        },
    actions: {
        actionUsername: function (context) {
          context.commit('changeUsername')
        }
      },
}
