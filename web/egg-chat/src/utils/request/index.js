import axios from 'axios'

import config from './axios-config'

export default {
    get(url) {
        return axios.get(url,config)
    },
    post(url, data) {
        return axios.post(url, data, config)
    }
}