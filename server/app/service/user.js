'use strict';

const Service = require('egg').Service

class UserService extends Service {
    constructor(ctx) {
        super(ctx)
    }

    async register({username, password}) {
        let result = await this.ctx.model.User.findOne({username})
        if (result) {
            this.ctx.throw(422, `user: "${username}" is exit`)
        } else {
            result = await this.ctx.model.User.create({username, password})
            const token =  this.app.jwt.sign({ _id: result._id }, this.app.config.jwt.secret)
            return {token}
        }
    }

    async tokenLogin() {
        const userId = this.ctx.state.user._id
        if(!userId) {
            this.ctx.throw(401, `Unauthorized`)
        } else {
            const user = await this.ctx.model.User.findById(userId)
            if (!user) {
                this.ctx.throw(422, `user is not exit`)
            } else {
                //TODO: 添加用户登录数据库状态
                this.ctx.body = {msg: 'seccess'}
            }
        }
    }
    
    async login({username, password}) {
        const user = await this.ctx.model.User.findOne({username})
        if(!user) {
            this.ctx.throw(422, `user is not exit`)
        } else {
            //TODO: 添加用户登录数据库状态
            const token =  this.app.jwt.sign({ _id: result._id }, this.app.config.jwt.secret)
            return {token}
        }
    }
}

module.exports = UserService

