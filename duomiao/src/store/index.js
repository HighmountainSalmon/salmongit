import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: '',
  login: true // 是否登录
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
