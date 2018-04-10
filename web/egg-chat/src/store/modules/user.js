import Api from '../../utils/api'
import {
  USER_LOGIN,
  USER_LOGINFAIL,
  USER_LOGINSUCESS
} from '../mutation-types'

import {
  REGISTER,
  LOGIN
} from '../action-types'

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
    state.error = payload.error
  },
  [USER_LOGINSUCESS]: (state, payload) => {
    state.loading = false
    state.token = payload.token
    state.username = payload.username
    state.logined = true
  }
}

const actions = {
  async [REGISTER] (ctx, {username, password}) {
    try {
      ctx.commit(USER_LOGIN)
      const response = await Api.Register({username, password})
      if (response && response.data.token) {
        ctx.commit(USER_LOGINSUCESS, { token: response.data.token, username })
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
  async [LOGIN] (ctx, {username, password}) {
    try {
      ctx.commit(USER_LOGIN)
      const response = await Api.Login({username, password})
      if (response && response.data.token) {
        ctx.commit(USER_LOGINSUCESS, {token: response.data.token, username})
      } else {
        ctx.commit(USER_LOGINFAIL, { error: 'Internet error' })
      }
      return response
    } catch (error) {
      ctx.commit(USER_LOGINFAIL, { error })
      console.log(error)
      throw error
    }
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
