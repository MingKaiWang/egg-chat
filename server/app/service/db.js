'use strict';

const Service = require('egg').Service

const REDIS_TOKENMAP_KEY = 'REDIS_TOKENMAP_KEY' // token
const REDIS_ONLINE_SOCKET_KEY = 'REDIS_ONLINE_SOCKET_KEY' // online socket
const REDIS_USER_STATUS_KEY = 'REDIS_USER_STATUS_KEY' // user status
const REDIS_USER_READY_EVENT_KEY = 'REDIS_USER_READY_EVENT_KEY' // user ready event

class DBServices extends Service {
    constructor(ctx) {
        super(ctx)
    }

    async addToken({ userId, token }) {
        let tokensStr = await this.app.redis.hmget(REDIS_TOKENMAP_KEY, userId)
        let tokens
        if (!tokensStr) {
            tokens = [] 
        } else if (typeof(tokensStr) === 'string') {
            tokens = JSON.parse(tokensStr)
        } else if (typeof(tokensStr) === 'object') {
            tokens = tokensStr
        }
        tokens.push(token)
        if (tokens.length > 3) { tokens.shift() }
        tokensStr = JSON.stringify(tokens)
        return this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [userId]: tokensStr })
    }

    async removeToken({ userId, token }) {
        let tokensStr = await this.app.redis.hmget(REDIS_TOKENMAP_KEY, userId)
        let tokens 
        if (!tokensStr) {
            tokens = [] 
        } else if (typeof(tokensStr) === 'string') {
            tokens = JSON.parse(tokensStr)
        } else if (typeof(tokensStr) === 'object') {
            tokens = tokensStr
        }
        tokens = tokens.filter(t =>  t !== token )
        tokensStr = JSON.stringify(tokens)
        return this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [userId]: tokensStr })
    }

    async exitToken({ userId, token }) {
        let tokensStr = await this.app.redis.hmget(REDIS_TOKENMAP_KEY, userId)
        let tokens 
        if (!tokensStr) {
            tokens = [] 
        } else if (typeof(tokensStr) === 'string') {
            tokens = JSON.parse(tokensStr)
        } else if (typeof(tokensStr) === 'object') {
            tokens = tokensStr
        }
        return !!~tokens.indexOf(token)
    }

    async addOnlineSocket({ token, socketId }) {
        return this.app.redis.hmset(REDIS_ONLINE_SOCKET_KEY, { [token]: socketId })
    }

    async removeOnlineSocket({ token, socketId }) {
        return this.app.redis.hdel(REDIS_ONLINE_SOCKET_KEY, token)
    }

    async getUserStatus({ token }) {
        return this.app.redis.hmget(REDIS_USER_STATUS_KEY, token)
    }
    
    async setUserStatus({ token, status }) {
        return this.app.redis.hmset(REDIS_USER_STATUS_KEY, { [token]: status })
    }

    async getUserReadyEvent({ token, event }) {
        return this.app.redis.hmget(REDIS_USER_READY_EVENT_KEY, token+event )
    }

    async setUserReadyEvent({ token, event, ready=true }) {
        return this.app.redis.hmset(REDIS_USER_READY_EVENT_KEY, { [token+event]: ready })
    }

}

module.exports = DBServices