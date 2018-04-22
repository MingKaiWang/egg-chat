'use strict'

const Controller = require('egg').Controller

class RoomController extends Controller {
    async createGroupRoom({ name, users, info }) {
        const { CREATE_GROUP_ROOM } = this.ctx.event
        const socket = this.ctx.socket
        const result = await this.ctx.service.room.createGroupRoom({ name, users, info })
        const res = this.ctx.helper.parseResult(CREATE_GROUP_ROOM, { room: result._id}, { code: 0, msg: 'success' })
        socket.emit(res)
    }

    async createDirectRoom({ name, user, info }) {
        const { CREATE_DIRECT_ROOM }  = this.ctx.event
        const socket = this.ctx.socket
        const result = await this.ctx.service.room.createDirectRoom({ name, user, info })
        const res = this.ctx.helper.parseResult(CREATE_DIRECT_ROOM, { room: result._id}, { code: 0, message: 'success' })
        socket.emit(res)
    }
}