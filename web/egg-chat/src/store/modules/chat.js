import Api from '../../utils/api'

import {
  CHAT_GET_USER_LIST,
  CHAT_GET_USER_LIST_FAIL,
  CHAT_GET_USER_LIST_SUCCESS
} from '../mutation-types'

import {
  GET_ALL_USERS
} from '../action-types'

const state = {
  loading: false,
  error: '',
  users: []
}

const getters = {
  users: (state) => {
    return state.users
  }
}

const mutations = {
  [CHAT_GET_USER_LIST]: state => {
    state.loading = true
  },
  [CHAT_GET_USER_LIST_FAIL]: (state, payload) => {
    state.loading = false
    state.error = payload.error
  },
  [CHAT_GET_USER_LIST_SUCCESS]: (state, payload) => {
    state.loading = false
    state.users = payload.users
  }
}

const actions = {
  async [GET_ALL_USERS] (ctx, { token }) {
    ctx.commit(CHAT_GET_USER_LIST)
    try {
      const result = await Api.GetAllUsers({ token })
      if (!result.meta) {
        ctx.commit(CHAT_GET_USER_LIST_FAIL, { error: 'Internet Error' })
      } else if (result.meta && result.meta.code !== 0) {
        ctx.commit(CHAT_GET_USER_LIST_FAIL, { error: result.meta.Msg })
      } else {
        ctx.commit(CHAT_GET_USER_LIST_SUCCESS, { users: result.result.users })
      }
    } catch (error) {
      ctx.commit(CHAT_GET_USER_LIST_FAIL, { error })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
