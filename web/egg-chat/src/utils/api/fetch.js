import axios from 'axios'

import config from './axios-config'

export default {
    get(url, token) {
        if(token && typeof(token) === 'string') {
            config.headers['Authorization'] = `Bearer ${token}` 
        }
        return axios.get(url,config)
    },
    post(url, data, token) {
        if(token && typeof(token) === 'string') {
            config.headers['Authorization'] = `Bearer ${token}` 
        }
        return axios.post(url, data, config)
    }
}