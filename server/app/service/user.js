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
}

module.exports = UserService

