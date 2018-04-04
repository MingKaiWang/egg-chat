import Api from '../../utils/api'
import {
  USER_LOGIN,
  USER_LOGINFAIL,
  USER_LOGINSUCESS
} from '../types'

const state = {
  username: '',
  token: '',
  loading: false,
  error: '',
  logined: false
}

const getters = {
  currentUser: state => {
    return {
      username: state.username,
      token: state.token
    }
  },
  logined: state => {
    return state.logined
  },
  error: state => {
    return state.error
  }
}

const mutations = {
  [USER_LOGIN]: state => {
    state.loading = true
  },
  [USER_LOGINFAIL]: (state, payload) => {
    state.loading = false
    state.token = payload.token
  },
  [USER_LOGINSUCESS]: (state, payload) => {
    state.loading = false
    state.error = payload.error
  }
}

const actions = {
  async register (ctx, {username, password}) {
    // TODO: 注册
    try {
      ctx.commit(USER_LOGIN)
      const response = await Api.register({username, password})
      if (response) {
        // TODO: 把token取出来
        ctx.commit(USER_LOGINSUCESS, { token: 'token' })
      } else {
        ctx.commit(USER_LOGINFAIL, { error: 'Internet error' })
      }
      console.log(response)
      return response
    } catch (error) {
      ctx.commit(USER_LOGINFAIL, { error: error })
      console.log(error)
      throw error
    }
  },
  login () {
    // TODO: 登入
  },
  logout () {
    // TODO: 登出
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
