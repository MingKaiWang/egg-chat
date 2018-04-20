'use strict'

const Controller = require('egg').Controller

class RoomController extends Controller {
    async createGroupRoom({ name, users, info }) {
        const { CREATE_GROUP_ROOM } = this.ctx.header.event
        const socket = this.ctx.socket
        const result = await this.ctx.service.room.createGroupRoom({ name, users, info })
        const respons = this.ctx.helper.parseResult(CREATE_GROUP_ROOM, { room: result._id}, { code: 0, msg: 'success' })
        socket.emit(respons)
    }

    async createDirectRoom({ name, user, info }) {
        
    }
}