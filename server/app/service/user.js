'use strict';

const Service = require('egg').Service

const REDIS_TOKENMAP_KEY = 'REDIS_TOKENMAP_KEY'

class UserService extends Service {
    constructor(ctx) {
        super(ctx)
    }

    // 注册
    async register({username, password}) {
        let result = await this.ctx.model.User.findOne({username})
        if (result) {
            this.ctx.throw(422, `user: "${username}" is exit`)
        } else {
            result = await this.ctx.model.User.create({username, password})
            const token =  this.app.jwt.sign({ _id: result._id }, this.app.config.jwt.secret)
            await this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [result._id]: token })
            return {
                code:0,
                token
            }
        }
    }

    // token登入
    async tokenLogin() {
        const userId = this.ctx.state.user._id
        if(!userId) {
            this.ctx.throw(401, `Unauthorized`)
        } else {
            const user = await this.ctx.model.User.findById(userId)
            if (!user) {
                this.ctx.throw(422, `user is not exit`)
            } else {
                const token = this.app.jwt.sign({ _id: userId }, this.app.config.jwt.secret)
                await this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [userId]: token })
                return {
                    code: 0,
                    msg: 'login success',
                    token
                }
            }
        }
    }
    
    // 账号密码登入
    async login({username, password}) {
        const user = await this.ctx.model.User.findOne({username})
        if(!user) {
            this.ctx.throw(422, `user is not exit`)
        } else {
            const token =  this.app.jwt.sign({ _id: user._id }, this.app.config.jwt.secret)
            await this.app.redis.hmset(REDIS_TOKENMAP_KEY, { [user._id]: token })
            return {
                code: 0,
                msg: 'login success',
                token
            }
        }
    }

    // 登出
    async logout() {
        const userId = this.ctx.state.user._id
        if(!userId) {
            this.ctx.throw(401, `Unauthorized`)
        } else {
            const user = this.ctx.model.User.findById(userId)
            if(!user) {
                this.ctx.throw(422, `user is not exit`)
            } else {
                await this.app.redis.hdel(REDIS_TOKENMAP_KEY)
                return {
                    code: 0,
                    msg: 'logout success' 
                    }
            }
        }
    }

    // 校验token
    async validateToken() {
        const userId = this.ctx.state.user._id
        if(!userId) {
            this.ctx.throw(401, `Unauthorized`)
        } else {
            const token = await this.app.redis.hmget(REDIS_TOKENMAP_KEY, userId)
            let requestToken
            if (this.ctx.get('authorization')) {
                const parts = this.ctx.get('authorization').split(' ')
                if (parts.length == 2) {
                    const scheam = parts[0]
                    const credentials = parts[1]
                    if (/^Bearer$/i.test(scheme)) {
                        requestToken = credentials
                    }
                }
            }
            if (token === requestToken ) {
                return { 
                    code: 0,
                    msg: 'validate success' 
                }
            } else {
                return { 
                    code: 1,
                    msg: 'validate fail' 
                }
            }
        }
    }
}

module.exports = UserService

