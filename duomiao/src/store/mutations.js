import {setStore, removeStore} from '../Utils/localStorage'
const RECORD_USERINFO = 'RECORD_USERINFO'
const OUT_LOGIN = 'OUT_LOGIN'
export default {
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('user_id', info.userId)
  },
  [OUT_LOGIN] (state, id) {
    removeStore('user_id', id)
    state.userInfo = {}
    state.login = false
  }
}
