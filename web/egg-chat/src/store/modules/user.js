/* eslint-disable */
const state = {
  username: '',
  token: ''
}

const getters = {
  currentUser: state => {
    return {
      username: state.username,
      token: state.token
    }
  }
}

const mutations = {}

const actions = {
  register ({username, password}) {
    // TODO: 注册
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
