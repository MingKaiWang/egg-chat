import Api from '../../utils/api'

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
  async register ({username, password}) {
    // TODO: 注册
    try {
      const response = await Api.register({username, password})
      console.log(response)
      return response
    } catch (error) {
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
