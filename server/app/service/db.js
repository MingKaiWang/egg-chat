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
        const tokens = JSON.parse(tokensStr)
        tokens.push(token)
        tokensStr = JSON.stringify(tokens)
        const result = this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [userId]: tokensStr })
        return result
    }

    async removeToken({ userId, token }) {
        let tokensStr = await this.app.redis.hmget(REDIS_TOKENMAP_KEY, userId)
        let tokens = JSON.parse(tokensStr)
        tokens = tokens.filter(t =>  t !== token )
        tokensStr = JSON.stringify(tokens)
        const result = this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [userId]: tokensStr })
        return result
    }

    async addOnlineSocket({ token, socketId }) {
        const result = await this.app.redis.hmset(REDIS_ONLINE_SOCKET_KEY, { [token]: socketId })
        return result
    }

    async removeOnlineSocket({ token, socketId }) {
        const result = await this.app.redis.hdel(REDIS_ONLINE_SOCKET_KEY, token)
        return result
    }

    async getUserStatus({ token }) {
        const result = await this.app.redis.hmget(REDIS_USER_STATUS_KEY, token)
        return result
    }
    
    async setUserStatus({ token, status }) {
        const result = await this.app.redis.hmset(REDIS_USER_STATUS_KEY, { [token]: status })
        return result
    }

    async getUserReadyEvent({ token, event }) {
        const result = await this.app.redis.hmget(REDIS_USER_READY_EVENT_KEY, token+event )
        return result
    }

    async setUserReadyEvent({ token, event, ready=true }) {
        const result = await this.app.redis.hmset(REDIS_USER_READY_EVENT_KEY, { [token+event]: ready })
        return result
    }

}