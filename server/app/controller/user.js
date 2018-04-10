'use strict';

const Controller = require('egg').Controller;

const registerLoginRule = {
    username: 'string',
    password: 'string',
}

const loginRule = {
    username: 'string', 
    password: 'string',
}

class UserController extends Controller {

    //注册
    async register() {
        const ctx = this.ctx
        ctx.validate(registerLoginRule)
        const result = await ctx.service.user.register(ctx.request.body)
        ctx.body = result
    }

    //账号密码登入
    async login() {
        const ctx = this.ctx
        ctx.validate(loginRule)
        const result = await ctx.service.user.login(ctx.request.body)
        ctx.body = result
    }

    //token登入
    async tokenLogin() {
        const ctx = this.ctx
        const result = await ctx.service.user.tokenLogin()        
        ctx.body = result
    }

    //登出
    async logout() {
        const ctx = this.ctx
        const result = await ctx.service.user.logout()
        ctx.body = result
    }

    //验证token
    async validateToken() {
        const ctx = this.ctx
        const result = await ctx.service.user.validateToken()
        ctx.body = result
    }
  }
  
  module.exports = UserController;