import fetch from './fetch'

export default {
  Register ({ username, password }) {
    return fetch.post('/api/register', { username, password })
  },
  Login ({username, password}) {
    return fetch.post('/api/login', { username, password })
  },
  TokenLogin ({ token }) {
    return fetch.get('/api/tokenLogin', token)
  },
  Logout ({ token }) {
    return fetch.get('/api/logout', token)
  },
  GetAllUsers ({ token }) {
    return fetch.get('api/getAllUsers', token)
  }
}
