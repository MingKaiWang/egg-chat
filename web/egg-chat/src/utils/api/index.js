import fetch from './fetch'

export default {
    Register({username, password}) {
        return fetch.post('/api/register',{username, password})
    },
    Login(params) {
        return fetch.get('/api/login')
    },
    TokenLogin(token) {
        return fetch.get('/api/tokenLogin', token)
    },
    Logout(token) {
        return fetch.get('/api/logout', token)
    }
}
