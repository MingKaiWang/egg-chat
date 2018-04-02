'use strict';

const Controller = require('egg').Controller;

const registerLoginRule = {
    username: 'string',
    password: 'string',
}

const tokenRule = {
    token: 'string',
}

class UserController extends Controller {

    //注册
    async register() {
        const ctx = this.ctx
        ctx.validate(registerLoginRule)
        const result = await ctx.service.user.register(ctx.request.body)
        ctx.body = result
    }

    // //账号密码登入
    // async login(username, password) {
    //     const ctx = this.ctx
    //     ctx.validate(registerLoginRule)

    // }

    // //token登入
    // async tokenLogin(token) {
    //     const ctx = this.ctx
    //     ctx.validate(tokenRule)        
    // }

    // //登出
    // async logout() {
    //     const ctx = this.ctx
    // }
  }
  
  module.exports = UserController;