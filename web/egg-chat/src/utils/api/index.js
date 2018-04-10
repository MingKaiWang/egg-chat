import fetch from './fetch'

export default {
  Register ({ username, password }) {
    return fetch.post('/api/register', { username, password })
  },
  Login ({username, password}) {
    return fetch.post('/api/login', { username, password })
  },
  TokenLogin () {
    return fetch.get('/api/tokenLogin')
  },
  Logout () {
    return fetch.get('/api/logout')
  }
}
